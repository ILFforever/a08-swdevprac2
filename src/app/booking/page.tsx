import DataReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>
            <DataReserve/>
            <TextField name="Name-Lastname" label="Name-Lastname" variant="standard"></TextField>
            <TextField name="Contact-Number" label="Contact-Number" variant="standard"></TextField>
            <button name="Book Venue" className="block rounded-md bg-green-300 hover:bg-amber-500 px-3 py-3 shadow-small">Book Venue</button>
        </main>
    );
}