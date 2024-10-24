'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Trash2, Car, Bell, User } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from '@radix-ui/react-select'

interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  tireDimensions: string
}

interface NotificationPreference {
  type: string
  email: boolean
  sms: boolean
  push: boolean
}

export default function Settings() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, AN 12345'
  })

  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: '1', make: 'Toyota', model: 'Camry', year: 2020, tireDimensions: '215/55R17' }
  ])

  const [notificationPreferences, setNotificationPreferences] = useState<NotificationPreference[]>([
    { type: 'Quotes', email: true, sms: false, push: true },
    { type: 'Appointments', email: true, sms: true, push: true },
    { type: 'Tire Orders', email: true, sms: false, push: false }
  ])

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
  }

  const handleAddVehicle = () => {
    const newVehicle: Vehicle = {
      id: (vehicles.length + 1).toString(),
      make: '',
      model: '',
      year: new Date().getFullYear(),
      tireDimensions: ''
    }
    setVehicles([...vehicles, newVehicle])
  }

  const handleVehicleChange = (id: string, field: keyof Vehicle, value: string | number) => {
    setVehicles(vehicles.map(v => v.id === id ? { ...v, [field]: value } : v))
  }

  const handleRemoveVehicle = (id: string) => {
    setVehicles(vehicles.filter(v => v.id !== id))
  }

  const handleNotificationChange = (type: string, channel: 'email' | 'sms' | 'push', value: boolean) => {
    setNotificationPreferences(notificationPreferences.map(pref => 
      pref.type === type ? { ...pref, [channel]: value } : pref
    ))
  }

  return (
    <ScrollArea className="h-screen">
      <div className="dashboard-containers">
        <h1 className="text-3xl font-bold text-primary mb-6">Account Settings</h1>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal" className="flex items-center"><User className="w-4 h-4 mr-2" /> Personal Info</TabsTrigger>
            <TabsTrigger value="vehicles" className="flex items-center"><Car className="w-4 h-4 mr-2" /> Vehicles</TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center"><Bell className="w-4 h-4 mr-2" /> Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" value={personalInfo.address} onChange={handlePersonalInfoChange} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="vehicles">
            <Card>
              <CardHeader>
                <CardTitle>Registered Vehicles</CardTitle>
                <CardDescription>Manage your vehicle information for easier quote requests.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {vehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="space-y-4">
                    {index > 0 && <Separator />}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`make-${vehicle.id}`}>Make</Label>
                        <Input 
                          id={`make-${vehicle.id}`} 
                          value={vehicle.make} 
                          onChange={(e) => handleVehicleChange(vehicle.id, 'make', e.target.value)} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`model-${vehicle.id}`}>Model</Label>
                        <Input 
                          id={`model-${vehicle.id}`} 
                          value={vehicle.model} 
                          onChange={(e) => handleVehicleChange(vehicle.id, 'model', e.target.value)} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`year-${vehicle.id}`}>Year</Label>
                        <Input 
                          id={`year-${vehicle.id}`} 
                          type="number" 
                          value={vehicle.year} 
                          onChange={(e) => handleVehicleChange(vehicle.id, 'year', parseInt(e.target.value))} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`tires-${vehicle.id}`}>Tire Dimensions</Label>
                        <Input 
                          id={`tires-${vehicle.id}`} 
                          value={vehicle.tireDimensions} 
                          onChange={(e) => handleVehicleChange(vehicle.id, 'tireDimensions', e.target.value)} 
                        />
                      </div>
                    </div>
                    <Button variant="destructive" size="sm" onClick={() => handleRemoveVehicle(vehicle.id)}>
                      <Trash2 className="w-4 h-4 mr-2" /> Remove Vehicle
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleAddVehicle}>
                  <PlusCircle className="w-4 h-4 mr-2" /> Add Vehicle
                </Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified about quotes, appointments, and tire orders.</CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-4">Notification Type</th>
                      <th className="text-center pb-4">Email</th>
                      <th className="text-center pb-4">SMS</th>
                      <th className="text-center pb-4">Push</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notificationPreferences.map((pref) => (
                      <tr key={pref.type} className="border-t">
                        <td className="py-4">{pref.type}</td>
                        <td className="text-center">
                          <Switch 
                            checked={pref.email} 
                            onCheckedChange={(checked) => handleNotificationChange(pref.type, 'email', checked)} 
                          />
                        </td>
                        <td className="text-center">
                          <Switch 
                            checked={pref.sms} 
                            onCheckedChange={(checked) => handleNotificationChange(pref.type, 'sms', checked)} 
                          />
                        </td>
                        <td className="text-center">
                          <Switch 
                            checked={pref.push} 
                            onCheckedChange={(checked) => handleNotificationChange(pref.type, 'push', checked)} 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  )
}