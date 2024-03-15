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
export declare const createFabricantes: (values: Record<string, any>) => Promise<import("mongoose").Document<unknown, {}, {
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
}>;
export declare const findFabricantes: () => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
})[], import("mongoose").Document<unknown, {}, {
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, "find">;
export declare const deleteFabricantes: (id: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, "findOneAndDelete">;
export declare const updateFabricantes: (id: string, nome: string, telefone: string, endereco: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
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
    email: string;
    nif: string;
    endereco: string;
    dataRegistro: Date;
    nome: string;
    pais: string;
    telefone: string;
    Admin?: {
        prototype?: import("mongoose").Types.ObjectId | null | undefined;
        cacheHexString?: unknown;
        generate?: {} | null | undefined;
        createFromTime?: {} | null | undefined;
        createFromHexString?: {} | null | undefined;
        createFromBase64?: {} | null | undefined;
        isValid?: {} | null | undefined;
    } | null | undefined;
}, "findOneAndUpdate">;
