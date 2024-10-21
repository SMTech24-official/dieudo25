import { useState, useEffect } from "react";

// Define a custom hook to check user role
const useUserRole = () => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        // setRole("customer")
        setRole("servicesProvider")
        // setRole("admin")

    }, [])
    //   // Simulate fetching the user role from localStorage, API, or context
    //   useEffect(() => {
    //     // Example: Assuming the role is stored in localStorage
    //     const storedRole = localStorage.getItem("userRole");
    //     if (storedRole) {
    //       setRole(storedRole);
    //     } else {
    //       // Fetch from API or default role
    //       fetchUserRoleFromAPI().then((fetchedRole) => {
    //         setRole(fetchedRole);
    //       });
    //     }
    //   }, []);

    //   // Simulate an API call to fetch user role (if not found in localStorage)
    //   const fetchUserRoleFromAPI = async (): Promise<string> => {
    //     // Mock API request (replace with real API call)
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve("admin"); // Example: returning 'admin' as role
    //       }, 1000);
    //     });
    //   };

    return role;
};

export default useUserRole;
