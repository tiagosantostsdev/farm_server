import express from "express";
export declare const CreateVendas: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateVendasById: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindVendas: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteVendas: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
