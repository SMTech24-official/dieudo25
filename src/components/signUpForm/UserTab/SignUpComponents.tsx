import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import RegistrationStatusModal from "../regModal/UserRegModal"

type SignupData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  vehicleMakeModel: string;
  yearOfManufacture: string;
  vehicleType: string;
  licensePlateNumber: string;
  password: string;
  confirmPassword: string;
  fuelType: string;
  tireWidth: string;
  tireHeight: string;
  tireDiameter: string;
  tireManufacture: string;
  tireBrand: string;
}

export default function SignUpComponents() {
  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<SignupData>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      vehicleMakeModel: '',
      yearOfManufacture: '',
      vehicleType: '',
      licensePlateNumber: '',
      fuelType: '',
      tireWidth: '',
      tireHeight: '',
      tireDiameter: '',
      tireManufacture: '',
      tireBrand: '',
    }
  });

  const password = watch("password");

  const onSubmit = (data: SignupData) => {
    console.log('Form submitted:', data);
    window.scrollTo(0, 0) 
    reset()
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


  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center h-full w-full p-5">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-xl font-semibold">1. Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Full name is required" }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }}
                render={({ field }) => <Input type="email" {...field} />}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => <Input {...field} />}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
            </div>

          </div>


          <div className="space-y-4">
            <h2 className="text-xl font-semibold">2. Vehicle Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vehicleMakeModel">Vehicle Make and Model</Label>
                <Controller
                  name="vehicleMakeModel"
                  control={control}
                  rules={{ required: "Vehicle make and model is required" }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.vehicleMakeModel && <p className="text-red-500 text-sm mt-1">{errors.vehicleMakeModel.message}</p>}
              </div>
              <div>
                <Label htmlFor="yearOfManufacture">Year of Manufacture</Label>
                <Controller
                  name="yearOfManufacture"
                  control={control}
                  rules={{ required: "Year of manufacture is required" }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.yearOfManufacture && <p className="text-red-500 text-sm mt-1">{errors.yearOfManufacture.message}</p>}
              </div>
              <div>
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Controller
                  name="vehicleType"
                  control={control}
                  rules={{ required: "Vehicle type is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
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
                  )}
                />
                {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>}
              </div>
              <div>
                <Label htmlFor="licensePlateNumber">License Plate Number</Label>
                <Controller
                  name="licensePlateNumber"
                  control={control}
                  rules={{ required: "License plate number is required" }}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.licensePlateNumber && <p className="text-red-500 text-sm mt-1">{errors.licensePlateNumber.message}</p>}
              </div>
              <div>
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Controller
                  name="fuelType"
                  control={control}
                  rules={{ required: "Fuel type is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
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
                  )}
                />
                {errors.fuelType && <p className="text-red-500 text-sm mt-1">{errors.fuelType.message}</p>}
              </div>
            </div>
          </div>



          <div className="space-y-4">
            <h2 className="text-xl font-semibold">3. Tire Information</h2>
            <div className="mb-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="tireWidth">Tire Width</Label>
                  <Controller
                    name="tireWidth"
                    control={control}
                    rules={{ required: "Tire width is required" }}
                    render={({ field }) => <Input {...field} />}
                  />
                  {errors.tireWidth && <p className="text-red-500 text-sm mt-1">{errors.tireWidth.message}</p>}
                </div>
                <div>
                  <Label htmlFor="tireHeight">Tire Height</Label>
                  <Controller
                    name="tireHeight"
                    control={control}
                    rules={{ required: "Tire height is required" }}
                    render={({ field }) => <Input {...field} />}
                  />
                  {errors.tireHeight && <p className="text-red-500 text-sm mt-1">{errors.tireHeight.message}</p>}
                </div>
                <div>
                  <Label htmlFor="tireDiameter">Tire Diameter</Label>
                  <Controller
                    name="tireDiameter"
                    control={control}
                    rules={{ required: "Tire diameter is required" }}
                    render={({ field }) => <Input {...field} />}
                  />
                  {errors.tireDiameter && <p className="text-red-500 text-sm mt-1">{errors.tireDiameter.message}</p>}
                </div>

              </div>
              <p className="text-gray-400 text-sm mt-1">
                e.g., “195/65 R15” – you can find this on your tire’s sidewall. Not sure? No problem, the garage can help!
              </p>
            </div>

            <div>
              <Label htmlFor="tireManufacture">Year of Manufacture</Label>
              <Controller
                name="tireManufacture"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Enter your budget" />}
              />
            </div>
            <div>
              <Label htmlFor="brandPreferences">Current Tire Brand</Label>
              <Controller
                name="tireBrand"
                control={control}
                render={({ field }) => <Input {...field} placeholder=" e.g.. Michelin, Pirelli, etc." />}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={control}
                rules={passwordValidation}
                render={({ field }) => <Input type="password" {...field} />}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match"
                }}
                render={({ field }) => <Input type="password" {...field} />}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <Button onClick={() => setIsModalOpen(true)} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Sign Up
          </Button>
        </form>
      </div>
      <RegistrationStatusModal closeModal={closeModal} isModalOpen={isModalOpen} isSuccess={true}/>
    </div>
  )
}