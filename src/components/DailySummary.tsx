import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Transaction } from "../types";
import { financeCalculation } from "../utils/financeCalculation";
import { formatCurrency } from "../utils/formatting";

interface DailySummayProps {
  dailyTransactions: Transaction[];
  columns: number;
}

const DailySummary = ({ dailyTransactions, columns }: DailySummayProps) => {
  const { income, expense, balance } = financeCalculation(dailyTransactions)
  const isThreeColumnsLayout = columns === 3;
  return (
    <Box>
      <Grid container spacing={2}>
        {/* 収入 */}
        <Grid item xs={isThreeColumnsLayout ? 4 : 6} display={"flex"}>
          <Card
            // sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
            sx={{ bgcolor: "#EEEEEE", flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                収入
              </Typography>
              <Typography
                // color={(theme) => theme.palette.incomeColor.main}
                color="blue"
                textAlign="right"
                fontWeight="fontWeightBold"
                sx={{ wordBreak: "break-all" }}
              >
                ¥{formatCurrency(income)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* 支出 */}
        <Grid item xs={isThreeColumnsLayout ? 4 : 6} display={"flex"}>
          <Card
            // sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
            sx={{ bgcolor: "#EEEEEE", flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                支出
              </Typography>
              <Typography
                // color={(theme) => theme.palette.expenseColor.main}
                color="red"
                textAlign="right"
                fontWeight="fontWeightBold"
                sx={{ wordBreak: "break-all" }}
              >
                ¥{formatCurrency(expense)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* 残高 */}
        <Grid item xs={isThreeColumnsLayout ? 4 : 12} display={"flex"}>
          <Card
            // sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
            sx={{ bgcolor: "#EEEEEE", flexGrow: 1 }}
          >
            <CardContent>
              <Typography variant="body2" noWrap textAlign="center">
                残高
              </Typography>
              <Typography
                // color={(theme) => theme.palette.expenseColor.main}
                color="green"
                textAlign="right"
                fontWeight="fontWeightBold"
                sx={{ wordBreak: "break-all" }}
              >
                ¥{formatCurrency(balance)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DailySummary;
