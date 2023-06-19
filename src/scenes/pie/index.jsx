import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PiChart";


const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Диаграмма" subtitle="Простая диаграмма" />
      <Box height="75vh">
        <PieChart/> 
      </Box>
    </Box>
  );
};

export default Pie;
