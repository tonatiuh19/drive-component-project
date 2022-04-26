import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import InputText from "../../components/InputText/InputText";
import ButtonAction from "../../components/Button/ButtonAction";
import { FormValidation } from "../../interfaces/formValidation.interface";
import calculateSquareFootage from "../../utils/calculateSquareFootage";
import { HomeStyle, HomeStyleContainer } from "./Home.style";

const Home = () => {
  const [name, setName] = useState<FormValidation>({
    helper: "Please enter a valid name",
    value: "",
    type: "text",
  });
  const [address1, setAddress1] = useState<FormValidation>({
    helper: "Please enter a valid Address",
    value: "",
    type: "text",
  });
  const [address2, setAddress2] = useState<FormValidation>({
    helper: "Please enter a valid Address",
    value: "",
    type: "text",
  });
  const [city, setCity] = useState<FormValidation>({
    helper: "Please enter a valid City",
    value: "",
    type: "text",
  });
  const [state, setState] = useState<FormValidation>({
    helper: "Please enter a valid State",
    value: "",
    type: "text",
  });
  const [postalCode, setPostalCode] = useState<FormValidation>({
    helper: "Please enter a valid Postal Code",
    value: "",
    type: "number",
  });
  const [country, setCountry] = useState<FormValidation>({
    helper: "Please enter a valid Country",
    value: "",
    type: "text",
  });
  const [rooms, setRooms] = useState<FormValidation>({
    helper: "Please enter a valid number of Rooms",
    value: "",
    type: "number",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const [squareValue, setsquareValue] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  const handleChange = (event: any, type: string) => {
    switch (type) {
      case "NAME":
        setName({
          helper: "Please enter a valid name",
          value: event.target.value,
          type: "text",
        });
        break;
      case "ADDRESS1":
        setAddress1({
          helper: "Please enter a valid Address",
          value: event.target.value,
          type: "text",
        });
        break;
      case "ADDRESS2":
        setAddress2({
          helper: "Please enter a valid Address",
          value: event.target.value,
          type: "text",
        });
        break;
      case "CITY":
        setCity({
          helper: "Please enter a valid City",
          value: event.target.value,
          type: "text",
        });
        break;
      case "STATE":
        setState({
          helper: "Please enter a valid State",
          value: event.target.value,
          type: "text",
        });
        break;
      case "POSTALCODE":
        setPostalCode({
          helper: "Please enter a valid Postal Code",
          value: event.target.value,
          type: "number",
        });
        break;
      case "COUNTRY":
        setCountry({
          helper: "Please enter a valid Country",
          value: event.target.value,
          type: "text",
        });
        break;
      case "ROOMS":
        setRooms({
          helper: "Please enter a valid number of Rooms",
          value: event.target.value,
          type: "number",
        });
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (
      name.value.length > 1 &&
      address1.value.length > 1 &&
      city.value.length > 1 &&
      state.value.length > 1 &&
      country.value.length > 1 &&
      postalCode.value.length > 1 &&
      country.value.length > 1
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const resetForm = () => {
    setName({
      helper: "Please enter a valid name",
      value: "",
      type: "text",
    });

    setAddress1({
      helper: "Please enter a valid Address",
      value: "",
      type: "text",
    });

    setAddress2({
      helper: "Please enter a valid Address",
      value: "",
      type: "text",
    });

    setCity({
      helper: "Please enter a valid City",
      value: "",
      type: "text",
    });

    setState({
      helper: "Please enter a valid State",
      value: "",
      type: "text",
    });

    setPostalCode({
      helper: "Please enter a valid Postal Code",
      value: "",
      type: "number",
    });

    setCountry({
      helper: "Please enter a valid Country",
      value: "",
      type: "text",
    });

    setRooms({
      helper: "Please enter a valid number of Rooms",
      value: "",
      type: "number",
    });

    setIsFormValid(false);
    setsquareValue(0);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={HomeStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Result
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              The square is: <b>{squareValue}</b>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={HomeStyleContainer}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <div>DRIVE PROJECT</div>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={HomeStyleContainer}>
          <Grid item xs={12}>
            <InputText
              label="Full Name"
              error={name.value.length < 1}
              helperError={name.helper}
              type={name.type}
              value={name.value}
              handleChange={(e: any) => handleChange(e, "NAME")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              label="Address 1"
              error={address1.value.length < 1}
              helperError={address1.helper}
              type={address1.type}
              value={address1.value}
              handleChange={(e: any) => handleChange(e, "ADDRESS1")}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              label="Address 2"
              helperError={address2.helper}
              type={address2.type}
              value={address2.value}
              handleChange={(e: any) => handleChange(e, "ADDRESS2")}
            />
          </Grid>
          <Grid item xs={8}>
            <InputText
              label="City"
              error={city.value.length < 1}
              helperError={city.helper}
              type={city.type}
              value={city.value}
              handleChange={(e: any) => handleChange(e, "CITY")}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              label="State"
              error={state.value.length < 1}
              helperError={state.helper}
              type={state.type}
              value={state.value}
              handleChange={(e: any) => handleChange(e, "STATE")}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              label="Postal Code"
              error={postalCode.value.length < 1}
              helperError={postalCode.helper}
              type={postalCode.type}
              value={postalCode.value}
              handleChange={(e: any) => handleChange(e, "POSTALCODE")}
            />
          </Grid>
          <Grid item xs={8}>
            <InputText
              label="Country"
              error={country.value.length < 1}
              helperError={country.helper}
              type={country.type}
              value={country.value}
              handleChange={(e: any) => handleChange(e, "COUNTRY")}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={HomeStyleContainer}
          justifyContent="center"
        >
          <Grid item xs={3}>
            <ButtonAction
              text="Reset"
              icon="RESET"
              handleClick={() => resetForm()}
            />
          </Grid>
          <Grid item xs={3}>
            <ButtonAction
              text="Next"
              icon="NEXT"
              handleClick={() => validateForm()}
            />
          </Grid>
        </Grid>
        {isFormValid ? (
          <div>
            <Grid container spacing={2} sx={HomeStyleContainer}>
              <Grid item xs={12}>
                <InputText
                  label="Number of Rooms"
                  error={rooms.value.length < 1}
                  helperError={rooms.helper}
                  type={rooms.type}
                  value={rooms.value}
                  handleChange={(e: any) => handleChange(e, "ROOMS")}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={HomeStyleContainer}
              justifyContent="center"
            >
              <Grid item xs={6}>
                <ButtonAction
                  text="Calculate"
                  icon="CALCULATE"
                  handleClick={() => {
                    setOpenModal(true);
                    setsquareValue(calculateSquareFootage(rooms.value));
                  }}
                />
              </Grid>
            </Grid>
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default Home;
