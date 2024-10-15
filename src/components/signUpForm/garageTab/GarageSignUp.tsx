import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from 'lucide-react';

type OpeningHours = { day: string; start: string; end: string };

type Address = {
    street: string;
    postalCode: string;
    city: string;
    canton: string;
    country: string;
};

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
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const predefinedServices = [
    "Tire Installation",
    "Tire Balancing",
    "Wheel Alignment",
    "Tire Storage",
    "Tire Ordering for the Customer",
    "Servicing and Other Mechanical Services",
    "Vehicle Pickup Service"
];

export default function GarageServiceProviderSignup() {
    const { control, handleSubmit, watch, formState: { errors }, setValue, getValues } = useForm<GarageServiceProviderData>({
        defaultValues: {
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
        }
    });

    // Local state for new opening hour and new service
    const [newOpeningHour, setNewOpeningHour] = useState<OpeningHours>({ day: '', start: '', end: '' });
    const [newService, setNewService] = useState('');

    const password = watch("password");

    const passwordValidation = {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
        },
        validate: {
            uppercase: (value: string) =>
                /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
            lowercase: (value: string) =>
                /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
            number: (value: string) =>
                /[0-9]/.test(value) || "Password must contain at least one number",
            specialChar: (value: string) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character",
        },
    };

    const onSubmit = (data: GarageServiceProviderData) => {
        console.log('Form submitted:', data);
    };

    const handleAddOpeningHour = () => {
        const currentOpeningHours = getValues("openingHours");
        if (newOpeningHour.day && newOpeningHour.start && newOpeningHour.end) {
            setValue("openingHours", [...currentOpeningHours, newOpeningHour]);
            setNewOpeningHour({ day: '', start: '', end: '' });
        }
    };

    const handleRemoveOpeningHour = (index: number) => {
        const currentOpeningHours = getValues("openingHours");
        setValue("openingHours", currentOpeningHours.filter((_, i) => i !== index));
    };

    const handleAddCustomService = () => {
        const currentServices = getValues("servicesOffer");
        if (newService && !currentServices.includes(newService)) {
            setValue("servicesOffer", [...currentServices, newService]);
            setNewService('');
        }
    };

    const handleRemoveService = (service: string) => {
        const currentServices = getValues("servicesOffer");
        setValue("servicesOffer", currentServices.filter(s => s !== service));
    };

    return (
        <div className="flex items-center justify-center h-full w-full p-5">
            <div className="w-full max-w-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Garage Name field */}
                    <div>
                        <Label htmlFor="garageName">Garage Name</Label>
                        <Controller
                            name="garageName"
                            control={control}
                            rules={{ required: "Garage name is required" }}
                            render={({ field }) => <Input {...field} />}
                        />
                        {errors.garageName && <p className="text-red-500 text-sm">{errors.garageName.message}</p>}
                    </div>

                    {/* Address fields */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(['street', 'postalCode', 'city', 'canton', 'country'] as const).map((field) => (
                                <div key={field}>
                                    <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                                    <Controller
                                        name={`address.${field}` as const}
                                        control={control}
                                        rules={{ required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` }}
                                        render={({ field: { onChange, value } }) => (
                                            <Input
                                                id={field}
                                                value={typeof value === 'string' ? value : ''}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                    {errors.address && errors.address[field] && (
                                        <p className="text-red-500 text-sm">{errors.address[field]?.message}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Password fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Controller
                                name="password"
                                control={control}
                                rules={passwordValidation}
                                render={({ field }) => <Input type="password" {...field} />}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
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
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Opening Hours</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Select required
                                onValueChange={(value) => setNewOpeningHour((prev) => ({ ...prev, day: value }))} value={newOpeningHour.day}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select day" />
                                </SelectTrigger>
                                <SelectContent>
                                    {daysOfWeek.map(day => (
                                        <SelectItem key={day} value={day}>{day}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Input type="time" value={newOpeningHour.start} onChange={(e) => setNewOpeningHour((prev) => ({ ...prev, start: e.target.value }))} placeholder="Start time" />
                            <Input type="time" value={newOpeningHour.end} onChange={(e) => setNewOpeningHour((prev) => ({ ...prev, end: e.target.value }))} placeholder="End time" />
                        </div>
                        <Button type="button" onClick={handleAddOpeningHour} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                            Add Opening Hours
                        </Button>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <Controller
                                name="openingHours"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        {field.value.map((hour, index) => (
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
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    {/* Services Offered */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Services Offered</h2>
                        <Controller
                            name="servicesOffer"
                            control={control}
                            render={({ field }) => (
                                <Select 
                                    onValueChange={(value) => field.onChange([...field.value, value])}
                                    value={field.value[field.value.length - 1]}
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
                            )}
                        />
                        <div className="flex gap-4">
                            <Input  value={newService} onChange={(e) => setNewService(e.target.value)} placeholder="Enter a custom service" />
                            <Button type="button" onClick={handleAddCustomService} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                Add Custom Service
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Controller
                                name="servicesOffer"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        {field.value.map((service, index) => (
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
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    {/* Additional fields */}
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="dailyCapacity">Daily Capacity</Label>
                            <Controller
                                name="dailyCapacity"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        type="number"
                                        {...field}
                                        placeholder="Enter daily capacity"
                                    />
                                )}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Controller
                                name="timeSlotAvailability"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id="timeSlotAvailability"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <label htmlFor="timeSlotAvailability">Enable time slot availability</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Controller
                                name="rememberMe"
                                control={control}
                                render={({ field }) => (
                                    <Checkbox
                                        id="rememberMe"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}
