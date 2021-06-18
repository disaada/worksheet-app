import React from 'react' 
import {
  Container,
  Avatar,
  CssBaseline,
  Typography,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOutlined } from "@material-ui/icons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "@component/FormInput";
import { login } from "@api/auth"
import { useSnackbar } from "notistack";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const validationSchema = yup.object().shape({
  username: yup.string().required("Tidak boleh kosong"),
  password: yup.string().required("Tidak boleh kosong"),
});

const Login = () => {
    const history = useHistory()
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const {
      handleSubmit,
      control,
    } = useForm({
      resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
      login(data).then((res) => {
        const response = res?.data || res?.response?.data;
        if (res?.status === 200) {
          localStorage.setItem('token', response.token)
          localStorage.setItem("username", response.username);
          enqueueSnackbar(response.message, { variant: "success" });
          history.replace('/worksheet')
        }
        else enqueueSnackbar(response.message, { variant: "error" });
      });
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <FormInput
              name="username"
              label="Username"
              required
              control={control}
            />
            <FormInput
              name="password"
              label="Password"
              required
              control={control}
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}

export default Login
