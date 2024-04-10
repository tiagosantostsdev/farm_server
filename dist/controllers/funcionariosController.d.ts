import express from "express";
export declare const CreateFuncionario: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindFuncionario: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const FindFuncionarioById: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const UpdateFuncionario: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const DeleteFuncionario: (req: any, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const SolicitarRedefinicaoSenhaFunc: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
export declare const RedefinirSenhaFunc: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>> | undefined>;
