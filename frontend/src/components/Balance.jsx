

export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="font-bold text-lg pt-5">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg pt-5">
            Rs {value}
        </div>
    </div>
}

