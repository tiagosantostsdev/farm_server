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
export declare const createProduto: (values: Record<string, any>) => Promise<import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const findProdutos: () => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}, "find">;
export declare const searchProdutos: (nome: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}, "find">;
export declare const deleteProduto: (id: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}, "findOneAndDelete">;
export declare const updateProdutoAdmin: (id: string, nome: string, quantidade: number, dosagem: string, descricao: string, preco: string) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}, "findOneAndUpdate">;
export declare const updateProdutoCarrinho: (id: string, quantidade: number) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}> & {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    nome: string;
    quantidade: number;
    dosagem: string;
    descricao: string;
    preco: number;
    fornecedor: string;
    fabricante: string;
}, "findOneAndUpdate">;
