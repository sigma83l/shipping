import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

const faqs = [
  { question: "How long does it take for my package to be delivered?", answer: "Delivery time depends on the shipping method..." },
  { question: "How do I know what's going on with my shipment?", answer: "You can track your shipment using our tracking system..." },
  { question: "What does 'On Hold' status mean?", answer: "This means there is a delay due to customs or other factors..." },
  { question: "Do I need to pay customs or any other agency for my shipment?", answer: "Yes, customs fees may apply depending on your country..." }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Search FAQ..."
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon style={{ marginRight: "10px" }} />,
          }}
        />
      </div>
      
      {filteredFaqs.map((faq, index) => (
        <Accordion key={index} expanded={expanded === index} onChange={() => setExpanded(expanded === index ? null : index)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <strong>{faq.question}</strong>
          </AccordionSummary>
          <AccordionDetails>
            {faq.answer}
          </AccordionDetails>
        </Accordion>
      ))}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={() => setExpanded(null)}>Collapse All</Button>
      </div>
    </div>
  );
};

export default FAQ;
