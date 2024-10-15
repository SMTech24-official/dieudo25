import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type SignupData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  yearOfManufacture: string;
  vehicleType: string;
  licensePlateNumber: string;
  fuelType: string;
  tireWidth: string;
  tireHeight: string;
  tireDiameter: string;
  tireCondition: string;
  preferredTireType: string[];
  tireBudget: string;
  brandPreferences?: string;
  tpms: boolean;
  homePickupService: boolean;
}

export default function SignUpComponents() {
  const [formData, setFormData] = useState<SignupData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    vehicleMakeModel: '',
    yearOfManufacture: '',
    vehicleType: '',
    licensePlateNumber: '',
    fuelType: '',
    tireWidth: '',
    tireHeight: '',
    tireDiameter: '',
    tireCondition: '',
    preferredTireType: [],
    tireBudget: '',
    brandPreferences: '',
    tpms: false,
    homePickupService: false,
  })


  const fullNameValidation = {
    required: "Full Name is required",
    minLength: {
      value: 2,
      message: "Full Name must be at least 2 characters long",
    },
  };

  const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  };

  // Strong password validation regex
  const passwordValidation = {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
    validate: {
      uppercase: (value: string) =>
        /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
      specialChar: (value: string) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character",
    },
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handlePreferredTireTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTireType: prev.preferredTireType.includes(type)
        ? prev.preferredTireType.filter(t => t !== type)
        : [...prev.preferredTireType, type]
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="vehicleMakeModel">Vehicle Make and Model</Label>
              <Input id="vehicleMakeModel" name="vehicleMakeModel" value={formData.vehicleMakeModel} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="yearOfManufacture">Year of Manufacture</Label>
              <Input id="yearOfManufacture" name="yearOfManufacture" value={formData.yearOfManufacture} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="vehicleType">Vehicle Type</Label>
              <Select onValueChange={handleSelectChange('vehicleType')} value={formData.vehicleType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="licensePlateNumber">License Plate Number</Label>
              <Input id="licensePlateNumber" name="licensePlateNumber" value={formData.licensePlateNumber} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="fuelType">Fuel Type</Label>
              <Select onValueChange={handleSelectChange('fuelType')} value={formData.fuelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gasoline">Gasoline</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tire Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="tireWidth">Tire Width</Label>
                <Input id="tireWidth" name="tireWidth" value={formData.tireWidth} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="tireHeight">Tire Height</Label>
                <Input id="tireHeight" name="tireHeight" value={formData.tireHeight} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="tireDiameter">Tire Diameter</Label>
                <Input id="tireDiameter" name="tireDiameter" value={formData.tireDiameter} onChange={handleInputChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="tireCondition">Tire Condition</Label>
              <Select onValueChange={handleSelectChange('tireCondition')} value={formData.tireCondition}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tire condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Preferred Tire Type</Label>
              <div className="flex flex-wrap gap-4 mt-2">
                {['All-Season', 'Summer', 'Winter', 'All-Terrain'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tireType-${type}`}
                      checked={formData.preferredTireType.includes(type)}
                      onCheckedChange={() => handlePreferredTireTypeChange(type)}
                    />
                    <label htmlFor={`tireType-${type}`}>{type}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="tireBudget">Tire Budget</Label>
              <Input id="tireBudget" name="tireBudget" value={formData.tireBudget} onChange={handleInputChange} placeholder="Enter your budget" />
            </div>
            <div>
              <Label htmlFor="brandPreferences">Brand Preferences (optional)</Label>
              <Input id="brandPreferences" name="brandPreferences" value={formData.brandPreferences} onChange={handleInputChange} placeholder="Enter preferred brands" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tpms"
                checked={formData.tpms}
                onCheckedChange={handleCheckboxChange('tpms')}
              />
              <label htmlFor="tpms">Tire Pressure Monitoring System (TPMS)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="homePickupService"
                checked={formData.homePickupService}
                onCheckedChange={handleCheckboxChange('homePickupService')}
              />
              <label htmlFor="homePickupService">Home Pickup Service</label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Sign Up for Tire Service
          </Button>
        </form>
      </div>
    </div>
  )
}