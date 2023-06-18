import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

export default function ({ props }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addToCart = () => {
    const index = cart.findIndex((c) => c.id === props.id);
    if (index === -1) dispatch({ type: "ADDTOCART", payload: props });
  };
  return (
    <div className="col-lg-4 mb-4">
      <Card>
        <CardMedia
          sx={{ height: 180 }}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${props.price * props.quantity}
          </Typography>
        </CardContent>
        <div>
          <div className="d-flex justify-content-between p-2">
            <div>
              <IconButton>
                <FavoriteBorder />
              </IconButton>
            </div>
            <div>
              <IconButton color="warning" onClick={addToCart}>
                <ShoppingCartOutlined />
              </IconButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
