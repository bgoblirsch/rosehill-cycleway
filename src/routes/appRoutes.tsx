import React from "react"
import DashboardPageLayout from "../pages/bikeInfrastructure/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";

import FuturePage from "../pages/bikeInfrastructure/FuturePage";
import DashboardIndex from "../pages/bikeInfrastructure/BikeIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import ExistingPage from "../pages/bikeInfrastructure/ExistingPage";
import RosehillCyclewayPage from "../pages/bikeInfrastructure/RosehillCyclewayPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";

import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import ProjectOverviewPage from "../pages/ProjectOverview/ProjectOverviewPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HomeIcon from '@mui/icons-material/Home'

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
    order: 0
  },
  {
    order: 1,
    path: "/project-overview",
    element: <ProjectOverviewPage />,
    state: "project-overview",
    sidebarProps: {
      displayText: "Project Overview",
      icon: <HomeIcon />
    }
  },
  {
    path: "/bike-infrastructure",
    element: <DashboardPageLayout />,
    state: "bike-infrastructure",
    sidebarProps: {
      displayText: "Bike Infrastructure",
      icon: <DirectionsBikeIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "bike-infrastructure.index"
      },
      {
        path: "/bike-infrastructure/rosehill-cycleway",
        element: <RosehillCyclewayPage />,
        state: "bike-infrastructure.rosehill-cycleway",
        sidebarProps: {
          displayText: "Rosehill Cycleway Route"
        }
      },
      {
        path: "/bike-infrastructure/existing",
        element: <ExistingPage />,
        state: "bike-infrastructure.existing",
        sidebarProps: {
          displayText: "Existing Bike Routes"
        },
      },
      {
        path: "/bike-infrastructure/future",
        element: <FuturePage />,
        state: "bike-infrastructure.future",
        sidebarProps: {
          displayText: "Potential Future Bike Routes"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;