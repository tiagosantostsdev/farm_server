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
export declare const createVendas: (values: Record<string, any>) => Promise<import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const addProdutos: (id: string, nome: string, quantidade: number, descricao: string, dosagem: string, total: number) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}, "findOneAndUpdate">;
export declare const updateVendaCalc: (id: string, valor: number, total: number, troco: number) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}, "findOneAndUpdate">;
export declare const findVendaById: (id: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}, "findOne">;
export declare const findVendas: () => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}> & {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    produtos: any[];
    nomeCliente: string;
    troco: number;
    dataVenda: string;
    total?: number | null | undefined;
    valor?: number | null | undefined;
    Funcionario?: import("mongoose").Types.ObjectId | null | undefined;
}, "find">;
