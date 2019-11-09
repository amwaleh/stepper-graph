import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StepIcon from "@material-ui/core/StepIcon";
import StepContent from "@material-ui/core/StepContent";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 122,
    zIndex: 1,
    left: "-50% ",
    right: "50% "
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,#1e88e5 0%,#1e88e5 100%,#1e88e5 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,#1e88e5 0%,#1e88e5 100%,#1e88e5 100%)"
    }
  },
  line: {
    height: 6,
    border: 0,
    backgroundColor: "#1e88e5",
    borderRadius: 1,
    zIndex: 1,
    maxWidth: 100
  }
})(StepConnector);

const useStyles = makeStyles(theme => ({
  root: {
    width: "200px",
    backgroundColor: "#00F",
    "& .MuiStepLabel-labelContainer": {
      height: "3rem",
      overflow: "hidden"
    }
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Pre Production",
    "Approved/pending approval",
    "In Production",
    "Waiting Shipment",
    "Waiting Shipment",
    "post production"
  ];
}

const SVGElement = props => (
  <svg
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "110px",
      MaxHeight: "110px"
    }}
  >
    <g id="UrTavla">
      <circle
        style={{ fill: "#1e88e5" }}
        cx="50%"
        cy="50%"
        r={`${props.value / 2}%`}
      />
      <circle
        style={{ fill: "#000" }}
        cx="50%"
        cy="50%"
        r="1.5rem"
        stroke="0"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        style={{ fontSize: "1rem", fill: "#FFF", fontWeight: "normal" }}
      >
        {props.label || 0}
      </text>{" "}
    </g>
  </svg>
);
function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(5);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(label => {
          const randomValue = Math.random() * 100;
          return (
            <Step key={label} completed={false}>
              <div>
                <StepLabel>{label}</StepLabel>
              </div>
              <SVGElement
                label={`${parseInt(randomValue)}`}
                value={`${randomValue}`}
                style={{ Width: "500px" }}
              />
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}
