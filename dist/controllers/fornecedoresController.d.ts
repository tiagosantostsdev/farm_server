import express from "express";
export declare const CreateFornecedor: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindFornecedor: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateFornecedor: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteFornecedor: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
