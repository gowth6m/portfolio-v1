"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabContentDisplayProps {
  jobTitle: string;
  company: string;
  date: string;
  description: string;
  techStack: string[];
  link: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: 4 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabContentDisplay({
  jobTitle,
  company,
  date,
  description,
  techStack,
  link,
}: TabContentDisplayProps) {
  return (
    <div className="text-[var(--slate)]">
      <h2 className="text-[var(--lightest-slate)] text-lg">
        {jobTitle}{" "}
        <span className="text-[var(--green-bright)]">@ {company}</span>
      </h2>
      <h4 className="text-sm">{date}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabCSS = {
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: "var(--slate)",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flex: "auto",
          display: "flex",
          color: "var(--green-bright)",
          width: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            color: "var(--green-bright)",
          }}
          indicatorColor="primary"
        >
          <Tab sx={tabCSS} label="HIVED" {...a11yProps(0)} />
          <Tab sx={tabCSS} label="University of Exeter" {...a11yProps(1)} />
          <Tab sx={tabCSS} label="Swmstudios" {...a11yProps(2)} />
          <Tab sx={tabCSS} label="Nocxa" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TabContentDisplay
            jobTitle={"Frontend Developer"}
            company={"HIVED"}
            date={"Feb 2021 - Present"}
            description={"Some description"}
            techStack={["React", "TypeScript", "Next.js", "TailwindCSS"]}
            link={"https://hived.space"}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabContentDisplay
            jobTitle={"Software Engineer"}
            company={"University of Exeter"}
            date={"Feb 2021 - Present"}
            description={"Some description"}
            techStack={["React", "TypeScript", "Next.js", "TailwindCSS"]}
            link={"https://www.exeter.ac.uk"}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabContentDisplay
            jobTitle={"Full Stack Developer"}
            company={"Swmstudios"}
            date={"Feb 2021 - Present"}
            description={"Some description"}
            techStack={["React", "TypeScript", "Next.js", "TailwindCSS"]}
            link={"https://hived.space"}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabContentDisplay
            jobTitle={"Frontend Developer"}
            company={"Noxa"}
            date={"Feb 2021 - Present"}
            description={"Some description"}
            techStack={["React", "TypeScript", "Next.js", "TailwindCSS"]}
            link={"https://hived.space"}
          />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#64ffda",
    },
    secondary: {
      main: "#8892b0",
    },
  },
});
