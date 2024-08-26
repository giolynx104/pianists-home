import { Typography } from "@mui/material"

const Status = ({ name, backgroundColor, textColor }: { name: string, backgroundColor: string, textColor: string }) => {
    return <Typography variant="subtitle2" className={`w-fit bg-${backgroundColor} text-${textColor} rounded-2xl p-2`} >
        {name}
    </Typography >
}

export default Status;