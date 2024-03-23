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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare const findAdminLogin: (admin: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    admin: string;
    email: string;
    password: string;
    avatar?: string | null | undefined;
    codeVerify?: string | null | undefined;
}> & {
    admin: string;
    email: string;
    password: string;
    avatar?: string | null | undefined;
    codeVerify?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    admin: string;
    email: string;
    password: string;
    avatar?: string | null | undefined;
    codeVerify?: string | null | undefined;
}> & {
    admin: string;
    email: string;
    password: string;
    avatar?: string | null | undefined;
    codeVerify?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    admin: string;
    email: string;
    password: string;
    avatar?: string | null | undefined;
    codeVerify?: string | null | undefined;
}, "findOne">;
export declare const findFuncionarioLogin: (usuario: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: Date;
    telemovel: string;
    dataNascimento: string;
    email?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}> & {
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: Date;
    telemovel: string;
    dataNascimento: string;
    email?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: Date;
    telemovel: string;
    dataNascimento: string;
    email?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}> & {
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: Date;
    telemovel: string;
    dataNascimento: string;
    email?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    usuario: string;
    senha: string;
    endereco: string;
    dataRegistro: Date;
    telemovel: string;
    dataNascimento: string;
    email?: string | null | undefined;
    nif?: string | null | undefined;
    genero?: string | null | undefined;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, "findOne">;
export declare const generateToken: (id: string) => string;
