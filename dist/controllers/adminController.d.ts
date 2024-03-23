import express from "express";
export declare const CreateAdmin: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindAdmin: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindAdminById: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateAdmin: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const SolicitarRedefinicaoSenha: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const RedefinirSenha: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
