import express from "express";
export declare const CreateProdutos: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindProdutos: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const SearchProdutos: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateProdutos: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteProdutos: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
