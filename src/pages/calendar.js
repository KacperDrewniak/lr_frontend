import React from 'react';
import {Router} from '@reach/router';
import Layout from "../components/layout";
import LoginCalendar from "../components/calendar/LoginCalendar";
import PrivateRouteCalendar from "../components/calendar/PrivateRouteCalendar";
import CalendarAuth from "../components/calendar/CalendarAuth"




import styled from "styled-components";
import SEO from "../components/seo";
const Center = styled.div`
    text-align:center`


const Calendar = () => (
    <Layout>
        <SEO title="Kalendarz" />
        <Router>
            <PrivateRouteCalendar component={CalendarAuth} path="/calendar/calendarauth"/>
            <LoginCalendar path="/calendar/loginCalendar"/>
        </Router>
    </Layout>
)
export default Calendar;