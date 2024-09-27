import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";

// Load environment variables
dotenv.config({ path: "./.env" });

// Initialize Express
const app: Application = express();

// Initialize Stripe with API version and secret key
const stripe = new Stripe(process.env.STRIPE_SECRET || "", {
  apiVersion: "2024-06-20", // Include the Stripe API version
});

// Middleware to handle CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware to parse JSON request body
app.use(express.json());

// Route to handle the payment intent creation
app.post("/create-payment", async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr", // Change to PKR
            product_data: {
              name: "Rc Car",
            },
            unit_amount: 170 * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    if (session.url) {
      res.json({ url: session.url });
    } else {
      res.status(500).json({ error: "Session URL not generated." });
    }
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({
      message: "Payment failed, please try again!",
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`---- Server is Running on port ${PORT} ----`);
});
