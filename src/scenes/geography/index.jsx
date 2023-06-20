import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Диаграмма" subtitle="Простая диаграмма" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Pie;
