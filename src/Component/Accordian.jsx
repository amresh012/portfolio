import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa6";

export default function AccordionUsage({ props }) {
  return (
    <div className="space-y-6">
      {props.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-4">
                <Avatar src={item.img} sx={{ width: 56, height: 56 }} />
                <div className="flex flex-col ">
                  <p className="font-bold text-xl">{item.position}</p>
                  <p>{item.company}</p>
                  <p className="text-xs flex items-center">
                    <FaLocationArrow /> {item.location}
                  </p>
                </div>
              </div>
              <p>{item.duration}</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
           {item.description}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
