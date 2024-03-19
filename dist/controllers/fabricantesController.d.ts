import express from "express";
export declare const CreateFabricante: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindFabricante: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateFabricante: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteFabricante: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
