import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useState } from "react";
import { useInputValidation, useFileHandler } from "6pp";
import { usernameValidator } from "../util/validators";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");
  const avatar = useFileHandler("single");

  const handelLogin = (e) => {
    e.preventDefault();
    // console.log(username, password);
  };
  const handelSignup = (e) => {
    e.preventDefault();
    // console.log(name, bio, username, password, avatar);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLogin ? (
        <Paper elevation={4} style={{ borderRadius: "1rem" }}>
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <Box component="form" onSubmit={handelLogin} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {/* {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )} */}

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              {/* {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )} */}

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                // disabled={isLoading}
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                // disabled={isLoading}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </Box>
          </Box>
        </Paper>
      ) : (
        <Paper elevation={4} style={{ borderRadius: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handelSignup} sx={{ mt: 3 }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                <Typography
                  m={"1rem auto"}
                  width={"fit-content"}
                  display={"block"}
                  color="error"
                  variant="caption"
                >
                  {avatar.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                // disabled={isLoading}
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>

              <Button
                // disabled={isLoading}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default Login;
