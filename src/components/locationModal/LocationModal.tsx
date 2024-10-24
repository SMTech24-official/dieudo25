'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ChevronsUpDown, Clipboard, Loader2, LocateIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from '@/hooks/use-toast'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from '@/lib/utils'

// Define the type for the location data returned by Nominatim
interface LocationData {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    boundingbox: string[];
}

export default function LocationModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string | null>(null)
    const [suggestion, setSuggestion] = useState<LocationData[] | null>(null) // Update type for suggestions
    const [humanReadableLocation, setHumanReadableLocation] = useState<string>("")
    const router = useRouter()
    const { toast } = useToast()

    const fetchHumanReadableLocation = async (
        latitude: number,
        longitude: number
    ) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            )
            const data: LocationData = await response.json()
            localStorage.setItem("location", JSON.stringify(data))
            setHumanReadableLocation(data.display_name)
            return data.display_name
        } catch (error) {
            console.error("Error fetching location:", error)
            throw error
        }
    }

    const getLocation = () => {
        setIsLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords
                    try {
                        const location = await fetchHumanReadableLocation(latitude, longitude)
                        setIsLoading(false)
                        router.push(`/request-quote?location=${encodeURIComponent(location)}`)
                        setIsOpen(false)
                    } catch (error) {
                        setIsLoading(false)
                        toast({
                            title: "Error",
                            description: "Failed to fetch your location. Please try again.",
                            variant: "destructive",
                        })
                    }
                },
                (error) => {
                    setIsLoading(false)
                    toast({
                        title: "Error",
                        description: "Failed to get your location. Please check your browser settings.",
                        variant: "destructive",
                    })
                }
            )
        } else {
            setIsLoading(false)
            toast({
                title: "Error",
                description: "Geolocation is not supported by this browser.",
                variant: "destructive",
            })
        }
    }

    const searchLocation = async (query: string) => {
        console.log(query);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
            );
            const data: LocationData[] = await response.json();
            // Update type for the response data
            setSuggestion(data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    useEffect(() => {
        if (search) {
            searchLocation(search);
        }
    }, [search]);

    const handleSelectLocation = (location: string) => {
        // Set the selected location and close the popover with a slight delay
        setSearchValue(location)
    }
    const requestQuote = () => {
        if (searchValue) {
            setIsOpen(false)
            localStorage.setItem("location", searchValue)
            router.push(`/request-quote?location=${encodeURIComponent(searchValue)}`)
        }
        else {
            getLocation()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group"
                >
                    <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
                    Request a Quote
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Get Your Location</DialogTitle>
                    <DialogDescription>
                        We&apos;ll use your current location to find nearby services.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 ">
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin" />
                            <p className="ml-2">Fetching your location...</p>
                        </div>
                    ) : (
                        <Command className='z-50'>
                            <CommandInput value={searchValue ? searchValue : search} onValueChange={e => setSearch(e)} placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions" className='h-40 overflow-y-scroll'>
                                    {
                                        suggestion?.map((data, idx) => {

                                            return (
                                                (
                                                    <CommandItem
                                                        key={idx}
                                                        value={data.display_name}
                                                        onSelect={() => {
                                                            handleSelectLocation(data.display_name)
                                                        }}

                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                searchValue === data.display_name ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />

                                                        {data.display_name}
                                                    </CommandItem>
                                                )
                                            )
                                        })
                                    }
                                </CommandGroup>
                                <CommandSeparator />
                            </CommandList>
                        </Command>
                    )
                    }
                </div>
                <DialogFooter>

                    <Button
                        onClick={() => {
                            requestQuote()
                        }}
                        disabled={isLoading}
                        className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group"
                    >
                        {!isLoading && <LocateIcon className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />}
                        {isLoading ? "Getting Location..." : "Get My Location"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
