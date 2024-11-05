import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { theme } from '../theme/theme';
import { Transaction } from '../types';
import { financeCalculation } from '../utils/financeCalculation';

interface MonthlySummaryProps {
    monthlyTransactions: Transaction[],
}

const MonthlySummary = ({ monthlyTransactions }: MonthlySummaryProps) => {
    console.log(monthlyTransactions);
    const { income, expense, balance } = financeCalculation(monthlyTransactions);
    return (
        <Grid container spacing={{ xs: 1, sm: 2 }} mb={2}>
            {/* 収入 */}
            <Grid item xs={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{
                    bgcolor: "blue",
                    // bgcolor: (theme) => theme.palette.incomeColor.main,
                    color: "white",
                    borderRadius: "10px",
                    flexGrow: 1,
                }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <ArrowUpwardIcon sx={{ fontSize: "2rem" }} />
                            <Typography>支出</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant='h5'
                            fontWeight={"fontWeightBold"}
                            sx={{ wordBreak: "break-word", fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" }, }}
                        >￥{income}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* 支出 */}
            <Grid item xs={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{
                    bgcolor: "red",
                    color: "white",
                    borderRadius: "10px",
                    flexGrow: 1,
                }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
                            <Typography>支出</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant='h5'
                            fontWeight={"fontWeightBold"}
                            sx={{ wordBreak: "break-word", fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" }, }}
                        >￥{expense}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* 残高 */}
            <Grid item xs={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{
                    bgcolor: "green",
                    color: "white",
                    borderRadius: "10px",
                    flexGrow: 1,
                }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <AccountBalanceIcon sx={{ fontSize: "2rem" }} />
                            <Typography>残高</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant='h5'
                            fontWeight={"fontWeightBold"}
                            sx={{ wordBreak: "break-word", fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" }, }}
                        >￥{balance}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default MonthlySummary
