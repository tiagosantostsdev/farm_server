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
export declare const createCarrinho: (values: Record<string, any>) => Promise<import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const findCarrinho: () => import("mongoose").Query<Omit<import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>[], import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}, "find">;
export declare const deleteCarrinho: (id: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}, "findOneAndDelete">;
export declare const findCarrinhoById: (id: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}> & {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    data: Date;
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    Produto: import("mongoose").Types.ObjectId[];
    total: number;
}, "findOne">;
