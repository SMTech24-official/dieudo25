import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { X } from 'lucide-react'

type OpeningHours = { day: string; start: string; end: string }

type Address = {
    street: string;
    postalCode: string;
    city: string;
    canton: string;
    country: string;
}

type GarageServiceProviderData = {
    password: string;
    confirmPassword: string;
    rememberMe: boolean;
    serviceType?: string;
    garageName?: string;
    address: Address;
    openingHours: OpeningHours[];
    timeSlotAvailability?: boolean;
    dailyCapacity?: number;
    servicesOffer: string[];
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const predefinedServices = [
    "Tire Installation",
    "Tire Balancing",
    "Wheel Alignment",
    "Tire Storage",
    "Tire Ordering for the Customer",
    "Servicing and Other Mechanical Services",
    "Vehicle Pickup Service"
]

export default function GarageServiceProviderSignup() {
    const [formData, setFormData] = useState<GarageServiceProviderData>({
        password: '',
        confirmPassword: '',
        rememberMe: false,
        address: {
            street: '',
            postalCode: '',
            city: '',
            canton: '',
            country: 'Switzerland'
        },
        openingHours: [],
        servicesOffer: [],
    })

    const [newService, setNewService] = useState('')
    const [newOpeningHour, setNewOpeningHour] = useState<OpeningHours>({ day: '', start: '', end: '' })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            address: { ...prev.address, [name]: value }
        }))
    }

    const handleSelectChange = (name: string) => (value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (name: string) => (checked: boolean) => {
        setFormData(prev => ({ ...prev, [name]: checked }))
    }

    const handleServicesChange = (services: string[]) => {
        setFormData(prev => ({ ...prev, servicesOffer: services }))
    }

    const handleAddCustomService = () => {
        if (newService && !formData.servicesOffer.includes(newService)) {
            setFormData(prev => ({ ...prev, servicesOffer: [...prev.servicesOffer, newService] }))
            setNewService('')
        }
    }

    const handleRemoveService = (service: string) => {
        setFormData(prev => ({
            ...prev,
            servicesOffer: prev.servicesOffer.filter(s => s !== service)
        }))
    }

    const handleAddOpeningHour = () => {
        if (newOpeningHour.day && newOpeningHour.start && newOpeningHour.end) {
            setFormData(prev => ({
                ...prev,
                openingHours: [...prev.openingHours, newOpeningHour]
            }))
            setNewOpeningHour({ day: '', start: '', end: '' })
        }
    }

    const handleRemoveOpeningHour = (index: number) => {
        setFormData(prev => ({
            ...prev,
            openingHours: prev.openingHours.filter((_, i) => i !== index)
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission logic here
    }

    return (
        <div className="flex items-center justify-center h-full w-full p-5">
            <div className="w-full max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="garageName">Garage Name</Label>
                            <Input id="garageName" name="garageName" value={formData.garageName || ''} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <Label htmlFor="serviceType">Service Type</Label>
                            <Select onValueChange={handleSelectChange('serviceType')} value={formData.serviceType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General Repair</SelectItem>
                                    <SelectItem value="specialist">Specialist</SelectItem>
                                    <SelectItem value="bodywork">Bodywork</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="street">Street</Label>
                                <Input id="street" name="street" value={formData.address.street} onChange={handleAddressChange} required />
                            </div>
                            <div>
                                <Label htmlFor="postalCode">Postal Code</Label>
                                <Input id="postalCode" name="postalCode" value={formData.address.postalCode} onChange={handleAddressChange} required />
                            </div>
                            <div>
                                <Label htmlFor="city">City</Label>
                                <Input id="city" name="city" value={formData.address.city} onChange={handleAddressChange} required />
                            </div>
                            <div>
                                <Label htmlFor="canton">Canton</Label>
                                <Input id="canton" name="canton" value={formData.address.canton} onChange={handleAddressChange} required />
                            </div>
                            <div className="md:col-span-2">
                                <Label htmlFor="country">Country</Label>
                                <Input id="country" name="country" value={formData.address.country} onChange={handleAddressChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Opening Hours</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Select onValueChange={(value) => setNewOpeningHour(prev => ({ ...prev, day: value }))} value={newOpeningHour.day}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select day" />
                                </SelectTrigger>
                                <SelectContent>
                                    {daysOfWeek.map(day => (
                                        <SelectItem key={day} value={day}>{day}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Input
                                type="time"
                                value={newOpeningHour.start}
                                onChange={(e) => setNewOpeningHour(prev => ({ ...prev, start: e.target.value }))}
                                placeholder="Start time"
                            />
                            <Input
                                type="time"
                                value={newOpeningHour.end}
                                onChange={(e) => setNewOpeningHour(prev => ({ ...prev, end: e.target.value }))}
                                placeholder="End time"
                            />
                        </div>
                        <Button type="button" onClick={handleAddOpeningHour} className="w-full">
                            Add Opening Hours
                        </Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {formData.openingHours.map((hour, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                                    <span>{hour.day}: {hour.start} - {hour.end}</span>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveOpeningHour(index)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Services Offered</h2>
                        <Select
                            onValueChange={(value) => handleServicesChange([...formData.servicesOffer, value])}
                            value={formData.servicesOffer[formData.servicesOffer.length - 1]}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select services" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {predefinedServices.map((service) => (
                                        <SelectItem key={service} value={service}>
                                            {service}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-4">
                            <Input
                                value={newService}
                                onChange={(e) => setNewService(e.target.value)}
                                placeholder="Enter a custom service"
                            />
                            <Button type="button" onClick={handleAddCustomService}>
                                Add Custom Service
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.servicesOffer.map((service, index) => (
                                <div key={index} className="flex items-center bg-gray-100 rounded px-3 py-1">
                                    <span>{service}</span>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveService(service)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="dailyCapacity">Daily Capacity</Label>
                            <Input
                                id="dailyCapacity"
                                name="dailyCapacity"
                                type="number"
                                value={formData.dailyCapacity || ''}
                                onChange={handleInputChange}
                                placeholder="Enter daily capacity"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="timeSlotAvailability"
                                checked={formData.timeSlotAvailability}
                                onCheckedChange={handleCheckboxChange('timeSlotAvailability')}
                            />
                            <label htmlFor="timeSlotAvailability">Enable time slot availability</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onCheckedChange={handleCheckboxChange('rememberMe')}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Sign Up as Garage Service Provider
                    </Button>
                </form>
            </div>
        </div>
    )
}