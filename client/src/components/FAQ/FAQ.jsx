import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Where is Skyline PG located?",
    answer:
      "Skyline PG is located in Hyderabad, Telangana. You can use the location map in the Contact section to get directions.",
  },
  {
    question: "What types of rooms are available?",
    answer:
      "We offer AC and Non-AC rooms with different sharing options, subject to availability.",
  },
  {
    question: "Is food available at the PG?",
    answer:
      "Yes. Breakfast, lunch and dinner are available with a variety of vegetarian and non-vegetarian options.",
  },
  {
    question: "What food is served?",
    answer:
      "Sample meals include Idly, Uthapam and Upma for breakfast; Bhagara Rice, Sambar, Dal, Veg Curry and Chicken Curry for lunch; and Chapati, Paneer Curry, Chicken Curry and Fried Rice for dinner.",
  },
  {
    question: "Is Wi-Fi available?",
    answer:
      "Yes, Wi-Fi is available for residents.",
  },
  {
    question: "Are the rooms and common areas maintained?",
    answer:
      "Yes. We focus on keeping the rooms and common areas clean, comfortable and hygienic.",
  },
  {
    question: "Is Skyline PG suitable for students and working professionals?",
    answer:
      "Yes. Skyline PG is suitable for both students and working professionals.",
  },
  {
    question: "How can I enquire about room availability?",
    answer:
      "You can contact us through phone or WhatsApp using the contact details provided on the website.",
  },
];

const FAQ = () => {
  return (
    <Box
      id="faq"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="md">

        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            sx={{
              color: "#1565C0",
              fontWeight: 800,
              letterSpacing: 1.5,
              fontSize: "0.9rem",
            }}
          >
            FAQ
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1.5,
              fontWeight: 900,
              color: "#0f172a",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
              lineHeight: 1.15,
            }}
          >
            Frequently Asked
            <br />
            <Box
              component="span"
              sx={{ color: "#1565C0" }}
            >
              Questions
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              color: "#64748b",
              lineHeight: 1.8,
            }}
          >
            Find quick answers about rooms, food,
            facilities and staying at Skyline PG.
          </Typography>
        </Box>

        {/* FAQ ACCORDIONS */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              elevation={0}
              disableGutters
              sx={{
                mb: 1.5,
                border: "1px solid #e2e8f0",
                borderRadius: "14px !important",
                overflow: "hidden",
                backgroundColor: "#ffffff",

                "&:before": {
                  display: "none",
                },

                "&:hover": {
                  borderColor: "#bfdbfe",
                },

                "&.Mui-expanded": {
                  borderColor: "#bfdbfe",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,0.06)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#1565C0",
                    }}
                  />
                }
                sx={{
                  minHeight: 68,
                  px: { xs: 2, md: 3 },

                  "&.Mui-expanded": {
                    minHeight: 68,
                  },

                  "& .MuiAccordionSummary-content": {
                    my: 2,
                    alignItems: "center",
                    gap: 1.5,
                  },
                }}
              >
                {/* NUMBER */}
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    minWidth: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#eff6ff",
                    color: "#1565C0",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    fontSize: {
                      xs: "0.9rem",
                      md: "0.98rem",
                    },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: { xs: 2, md: 3 },
                  pb: 3,
                  pt: 0,
                  ml: {
                    xs: 5.5,
                    md: 6,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* BOTTOM CARD */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
          }}
        >
          <Typography
            fontWeight={800}
            color="#0f172a"
          >
            Still have questions?
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color: "#64748b",
              fontSize: "0.88rem",
              lineHeight: 1.7,
            }}
          >
            Feel free to contact us for room availability,
            pricing and other enquiries.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default FAQ;