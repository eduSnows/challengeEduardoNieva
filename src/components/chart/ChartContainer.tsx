import React from 'react';
import {CartesianGrid,  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import TooltipChart from "./TooltipChart";
import {theme} from "../../theme/theme";
import { StyledTextThin} from "../../styles/StyledText";



/**
 * Auxiliary function to mock data
 * @param num - length of the array to be returned with random data
 */
export const mockData = (num:number) => {

    return Array.from({length: num}, (_, index) => {
        return {
            name: `${index + 1}`,
            uv: Math.floor(Math.random() * 1000)
        }
    })

}


/**
 * This component renders a chart
 * @constructor
 */

const ChartContainer = () => {

    const data = mockData(9)
    return (
        <ResponsiveContainer aspect={3.5} >
            <LineChart width={500} height={150} data={data}
                       margin={{top: 30, right: 60, left: 30, bottom: 30}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis label={<StyledTextThin/>}/>
                <YAxis/>
                <Tooltip content={<TooltipChart/>}/>
                <Line type="monotone" dataKey="uv" stroke={theme.light.colors.chart}  dot={{ r: 6 }} activeDot={{r:8}}/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartContainer;