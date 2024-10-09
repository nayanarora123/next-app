"use client";
import { useRouter } from "next/navigation";

export default function OrderPlace() {

    const router = useRouter();
    const handleOrder = () => {
        console.log('Order placing');
        router.push('/');        
        // router.replace('/');        
        // router.back();        
        // router.forward();      
        
        /**
         * For server component
         * use `redirect` function from 'next/navigation'
         */
    }

    return ( 
        <main>
            <h1>Order Details:</h1>
            <button onClick={handleOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Place order</button>
        </main>
    );
}