/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
export declare const Funcionario: mongoose.Model<{
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}> & {
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}>> & mongoose.FlatRecord<{
    telemovel: string;
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: string;
    dataNascimento: string;
    email?: string | null | undefined;
    codeVerify?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: mongoose.Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
