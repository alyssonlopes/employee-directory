import React, { useState, useContext, useEffect } from "react";
import Loading from "../Loading";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { APIContext } from "../../providers/Api";

const EmployeeForm = () => {
  const { api } = useContext(APIContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchDataDoDaniel() {
      const { positions } = await api.get("/api/positions");

      setPositions(positions);
      setIsLoading(false);
    }
    fetchDataDoDaniel();
  }, [api]);

  const setPhoneMask = (textNumber) => {
    let onlyNumber = textNumber.replace(/\D/g, "");
    let numberWithMask = [...onlyNumber]
      .map((letter, i) => {
        if (i === 0) return ["(", letter];
        if (i === 2) return [")", letter];
        if (i === 6) return ["-", letter];
        return letter;
      })
      .flat(1)
      .join("");

    setPhone(numberWithMask);
  };

  const checkEmailValidity = async () => {
    const { validity } = await api.get(`/api/verifica-email/${email}`);

    return validity;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const isValid = await checkEmailValidity();
    if (!isValid) {
      setErrorMessage("Informe um e-mail válido");
    } else {
      // TODO: enviar pro servidor
      setErrorMessage("");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <form onSubmit={onSubmit} style={{ margin: 20 }}>
          <TextField
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            fullWidth
          />

          <TextField
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
            helperText={errorMessage}
            error={!!errorMessage}
          />

          <TextField
            label="Position"
            select
            value={selectedPosition}
            onChange={(event) => setSelectedPosition(event.target.value)}
            name="selectedPosition"
            fullWidth
          >
            {positions.map((position, index) => {
              return (
                <MenuItem key={index} value={position}>
                  {position}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            label="Phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhoneMask(event.target.value)}
            pattern="[0-9]{4}-[0-9]{4}"
            placeholder="3333-3333"
            inputProps={{ maxLength: 14 }}
            fullWidth
          />

          <Button
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
            style={{ marginTop: 30, float: "right" }}
          >
            Send
          </Button>
        </form>
      )}
    </>
  );
};

export default EmployeeForm;
