'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, CheckCircle, Upload } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Calendar from "react-calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().min(10, { message: "Please enter your full address." }),
  vehicleMake: z.string().min(2, { message: "Please enter your vehicle make." }),
  vehicleModel: z.string().min(2, { message: "Please enter your vehicle model." }),
  yearOfManufacture: z.number().min(1900).max(new Date().getFullYear()),
  licensePlate: z.string().min(2, { message: "Please enter your license plate number." }),
  registrationItem24: z.string().optional(),
  fuelType: z.enum(["Diesel", "Petrol", "Electric", "Hybrid"]),
  tireSize: z.string().optional(),
  tireYearOfManufacture: z.number().optional(),
  tireBrand: z.string().optional(),
  serviceType: z.array(z.string()).nonempty({ message: "Please select at least one service." }),
  otherService: z.string().optional(),
  comments: z.string().optional(),
  budget: z.enum(["CHF100-250", "CHF250-450", "CHF450-700", "CHF700-1000", "Other"]),
  otherBudget: z.string().optional(),
  preferredDate: z.date(),
})

export default function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [date, setDate] = useState<Date | null>(null);




  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      vehicleMake: "",
      vehicleModel: "",
      yearOfManufacture: new Date().getFullYear(),
      licensePlate: "",
      registrationItem24: "",
      fuelType: "Diesel",
      tireSize: "",
      tireYearOfManufacture: new Date().getFullYear(),
      tireBrand: "",
      serviceType: [],
      otherService: "",
      comments: "",
      budget: "CHF100-250",
      otherBudget: "",
      preferredDate: new Date(),
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-2xl p-6 mx-auto bg-white shadow-lg rounded-lg">
          <CardHeader className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-xl font-semibold">Quote Request Submitted</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Your quote request has been successfully submitted. You will receive a response within 24 hours. We will notify you as soon as your quote is ready.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <Card className="w-full max-w-6xl mx-auto lg:my-20 ">
      <CardHeader>
        <CardTitle>Vehicle Service Quote Request</CardTitle>
        <CardDescription>Please fill out the form below to request a quote for your vehicle service.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4 lg:gap-10 grid grid-cols-1">
            <div>
              <h3 className="text-lg font-semibold">1. Basic Information</h3>
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 lg:mt-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+41 XX XXX XX XX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full address, including postal code and city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">2. Vehicle Information</h3>

              <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 lg:mt-4">
                <FormField
                  control={form.control}
                  name="vehicleMake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Make</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Renault" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicleModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Model</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Clio IV" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearOfManufacture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Manufacture</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="licensePlate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Plate Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationItem24"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item 24 of Vehicle Registration Document</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fuelType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="Petrol">Petrol</SelectItem>
                          <SelectItem value="Electric">Electric</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Current Tire Information</h3>

              <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 lg:mt-4">
                <FormField
                  control={form.control}
                  name="tireSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Tire Size</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 195/65 R15" {...field} />
                      </FormControl>
                      <FormDescription>You can find this on your tire&apos;s sidewall. Not sure? No problem, the garage can help!</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tireYearOfManufacture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tire Year of Manufacture</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tireBrand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Tire Brand</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Michelin, Pirelli" {...field} />
                      </FormControl>
                      <FormDescription>You can find this on your tire&apos;s sidewall. Not sure? No problem, the garage can help!</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Service Request</h3>
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 lg:mt-4">
                <div className='space-y-3'>
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Type of Service</FormLabel>
                          <FormDescription>
                            Select the services you need a quote for.
                          </FormDescription>
                        </div>
                        {['Tire Change', 'Oil Change', 'Brake Service', 'Engine Tune-up', 'Other'].map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="otherService"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Service (if applicable)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comments or Specific Requests</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter any additional details or requests" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormItem>
                    <FormLabel>Attach a Photo (optional)</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Input id="picture" type="file" onChange={handleFileChange} accept=".jpg,.png,.pdf" />
                        <Button type="button" size="sm" className="ml-auto">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Upload one or more photos to help us better understand your need (accepted formats: .jpg, .png, .pdf).
                    </FormDescription>
                  </FormItem>
                </div>
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="CHF100-250">CHF100-250</SelectItem>
                          <SelectItem value="CHF250-450">CHF250-450</SelectItem>
                          <SelectItem value="CHF450-700">CHF450-700</SelectItem>
                          <SelectItem value="CHF700-1000">CHF700-1000</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otherBudget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other Budget (if applicable)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred Date for Service</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={`w-[240px] pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            onChange={(value, event) => {
                              if (value instanceof Date) {
                                setDate(value); // Only set the date if it's a valid Date object
                              }
                            }}
                            value={date}
                            className="rounded-lg border border-gray-300 shadow-lg overflow-hidden"
                            minDate={new Date()} // Disable previous dates
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Select your preferred date for the service (up to 3 months in advance).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type='submit'
              className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group"
            >
              Request a Quote
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}