import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Наиболее часто задаваемые вопросы" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Важный вопрос #1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nostrum facere ex quisquam vel quibusdam! Eos harum maiores eveniet
            sequi iusto nisi quae impedit non? Deleniti repudiandae nemo alias
            nobis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Важный вопрос #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nostrum facere ex quisquam vel quibusdam! Eos harum maiores eveniet
            sequi iusto nisi quae impedit non? Deleniti repudiandae nemo alias
            nobis!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography colors={colors.greenAccent[500]} variant="h5">
            Важный вопрос #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            nostrum facere ex quisquam vel quibusdam! Eos harum maiores eveniet
            sequi iusto nisi quae impedit non? Deleniti repudiandae nemo alias
            nobis!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
