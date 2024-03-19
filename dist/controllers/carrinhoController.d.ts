import express from "express";
export declare const CreateCarrinho: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindCarrinho: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteCarrinho: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateCarrinho: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
