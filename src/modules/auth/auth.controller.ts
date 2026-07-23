import type { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUserIntoDB(req.body);
    const {refreshToken} = result;

    res.cookie("refreshToken", refreshToken,{
      secure:true, // In production, set this to true to ensure cookies are only sent over HTTPS
      httpOnly:true,
      sameSite:"lax"
    })

    res.status(201).json({
      success: true,
      message: "Profile created successfylly",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const refreshToken = async (req: Request, res: Response) =>{
  console.log(req.cookies);
}

export const authController = {
  loginUser,
  refreshToken
};
