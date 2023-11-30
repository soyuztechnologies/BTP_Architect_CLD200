"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObjectApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesOrderRelatedObject_1 = require("./SalesOrderRelatedObject");
const SalesOrderRelatedObjectRequestBuilder_1 = require("./SalesOrderRelatedObjectRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderRelatedObjectApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderRelatedObject_1.SalesOrderRelatedObject;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderRelatedObjectApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderRelatedObjectRequestBuilder_1.SalesOrderRelatedObjectRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderRelatedObject_1.SalesOrderRelatedObject, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link sdDocRelatedObjectSequenceNmbr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSequenceNmbr', 'Edm.String', false),
                /**
                 * Static representation of the {@link sdDocumentRelatedObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOCUMENT_RELATED_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('SDDocumentRelatedObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_SYSTEM: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectReference1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_REFERENCE_1: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference1', 'Edm.String', true),
                /**
                 * Static representation of the {@link sdDocRelatedObjectReference2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SD_DOC_RELATED_OBJECT_REFERENCE_2: fieldBuilder.buildEdmTypeField('SDDocRelatedObjectReference2', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderRelatedObject_1.SalesOrderRelatedObject)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderRelatedObjectApi = SalesOrderRelatedObjectApi;
//# sourceMappingURL=SalesOrderRelatedObjectApi.js.map