/* @ts-self-types="./whatsapp_rust_bridge.d.ts" */

export class ExpandedAppStateKeys {
    static __wrap(ptr) {
        const obj = Object.create(ExpandedAppStateKeys.prototype);
        obj.__wbg_ptr = ptr;
        ExpandedAppStateKeysFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ExpandedAppStateKeysFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_expandedappstatekeys_free(ptr, 0);
    }
    /**
     * @returns {Uint8Array}
     */
    get indexKey() {
        const ret = wasm.expandedappstatekeys_indexKey(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array}
     */
    get patchMacKey() {
        const ret = wasm.expandedappstatekeys_patchMacKey(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array}
     */
    get snapshotMacKey() {
        const ret = wasm.expandedappstatekeys_snapshotMacKey(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array}
     */
    get valueEncryptionKey() {
        const ret = wasm.expandedappstatekeys_valueEncryptionKey(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array}
     */
    get valueMacKey() {
        const ret = wasm.expandedappstatekeys_valueMacKey(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) ExpandedAppStateKeys.prototype[Symbol.dispose] = ExpandedAppStateKeys.prototype.free;

export class GroupCipher {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GroupCipherFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_groupcipher_free(ptr, 0);
    }
    /**
     * @param {Uint8Array | number[]} ciphertext
     * @returns {Promise<Uint8Array>}
     */
    decrypt(ciphertext) {
        const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.groupcipher_decrypt(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @param {Uint8Array | number[]} plaintext
     * @returns {Promise<Uint8Array>}
     */
    encrypt(plaintext) {
        const ptr0 = passArray8ToWasm0(plaintext, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.groupcipher_encrypt(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @param {SignalStorage} storage
     * @param {string} group_id
     * @param {ProtocolAddress} sender
     */
    constructor(storage, group_id, sender) {
        _assertClass(sender, ProtocolAddress);
        const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.groupcipher_new(storage, ptr0, len0, sender.__wbg_ptr);
        this.__wbg_ptr = ret;
        GroupCipherFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) GroupCipher.prototype[Symbol.dispose] = GroupCipher.prototype.free;

export class GroupSessionBuilder {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GroupSessionBuilderFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_groupsessionbuilder_free(ptr, 0);
    }
    /**
     * @param {SenderKeyName} sender_key_name
     * @returns {Promise<SenderKeyDistributionMessage>}
     */
    create(sender_key_name) {
        _assertClass(sender_key_name, SenderKeyName);
        const ret = wasm.groupsessionbuilder_create(this.__wbg_ptr, sender_key_name.__wbg_ptr);
        return ret;
    }
    /**
     * @param {SignalStorage} storage
     */
    constructor(storage) {
        const ret = wasm.groupsessionbuilder_new(storage);
        this.__wbg_ptr = ret;
        GroupSessionBuilderFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {SenderKeyName} sender_key_name
     * @param {SenderKeyDistributionMessage} skdm
     * @returns {Promise<void>}
     */
    process(sender_key_name, skdm) {
        _assertClass(sender_key_name, SenderKeyName);
        _assertClass(skdm, SenderKeyDistributionMessage);
        const ret = wasm.groupsessionbuilder_process(this.__wbg_ptr, sender_key_name.__wbg_ptr, skdm.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) GroupSessionBuilder.prototype[Symbol.dispose] = GroupSessionBuilder.prototype.free;

export class InternalBinaryNode {
    static __wrap(ptr) {
        const obj = Object.create(InternalBinaryNode.prototype);
        obj.__wbg_ptr = ptr;
        InternalBinaryNodeFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        InternalBinaryNodeFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_internalbinarynode_free(ptr, 0);
    }
    /**
     * @returns {{ [key: string]: string }}
     */
    get attrs() {
        const ret = wasm.internalbinarynode_attrs(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {BinaryNode[] | string | Uint8Array | undefined}
     */
    get content() {
        const ret = wasm.internalbinarynode_content(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {{ [key: string]: string }} new_attrs
     */
    set attrs(new_attrs) {
        wasm.internalbinarynode_set_attrs(this.__wbg_ptr, new_attrs);
    }
    /**
     * @param {BinaryNode[] | string | Uint8Array} new_content
     */
    set content(new_content) {
        wasm.internalbinarynode_set_content(this.__wbg_ptr, new_content);
    }
    /**
     * @returns {string}
     */
    get tag() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.internalbinarynode_tag(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {any}
     */
    toJSON() {
        const ret = wasm.internalbinarynode_toJSON(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) InternalBinaryNode.prototype[Symbol.dispose] = InternalBinaryNode.prototype.free;

export class LTHashAntiTampering {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LTHashAntiTamperingFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_lthashantitampering_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.lthashantitampering_new();
        this.__wbg_ptr = ret;
        LTHashAntiTamperingFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array | number[]} base
     * @param {Uint8Array[]} subtract
     * @param {Uint8Array[]} add
     * @returns {Uint8Array}
     */
    subtractThenAdd(base, subtract, add) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            let ptr0, len0, ptr1, len1, ptr2, len2;
            try {
                ptr0 = passArray8ToWasm0(base, wasm.__wbindgen_export);
                len0 = WASM_VECTOR_LEN;
                ptr1 = passArrayJsValueToWasm0(subtract, wasm.__wbindgen_export);
                len1 = WASM_VECTOR_LEN;
                ptr2 = passArrayJsValueToWasm0(add, wasm.__wbindgen_export);
                len2 = WASM_VECTOR_LEN;
            } catch (e) {
                if (ptr2) { wasm.__wbindgen_export8(ptr2, len2); wasm.__wbindgen_export3(ptr2, len2 * 4, 4); }
                if (ptr1) { wasm.__wbindgen_export8(ptr1, len1); wasm.__wbindgen_export3(ptr1, len1 * 4, 4); }
                if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
                throw e;
            }
            wasm.lthashantitampering_subtractThenAdd(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
if (Symbol.dispose) LTHashAntiTampering.prototype[Symbol.dispose] = LTHashAntiTampering.prototype.free;

export class LTHashState {
    static __wrap(ptr) {
        const obj = Object.create(LTHashState.prototype);
        obj.__wbg_ptr = ptr;
        LTHashStateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LTHashStateFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_lthashstate_free(ptr, 0);
    }
    /**
     * @returns {LTHashState}
     */
    clone() {
        const ret = wasm.lthashstate_clone(this.__wbg_ptr);
        return LTHashState.__wrap(ret);
    }
    /**
     * @param {string} index_mac_base64
     * @returns {boolean}
     */
    deleteValueMac(index_mac_base64) {
        const ptr0 = passStringToWasm0(index_mac_base64, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.lthashstate_deleteValueMac(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * @param {string} index_mac_base64
     * @returns {Uint8Array | undefined}
     */
    getValueMac(index_mac_base64) {
        const ptr0 = passStringToWasm0(index_mac_base64, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.lthashstate_getValueMac(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @param {string} index_mac_base64
     * @returns {boolean}
     */
    hasValueMac(index_mac_base64) {
        const ptr0 = passStringToWasm0(index_mac_base64, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.lthashstate_hasValueMac(this.__wbg_ptr, ptr0, len0);
        return ret !== 0;
    }
    /**
     * @returns {Uint8Array}
     */
    get hash() {
        const ret = wasm.lthashstate_hash(this.__wbg_ptr);
        return ret;
    }
    constructor() {
        const ret = wasm.lthashstate_new();
        this.__wbg_ptr = ret;
        LTHashStateFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {string} index_mac_base64
     * @param {Uint8Array | number[]} value_mac
     */
    setValueMac(index_mac_base64, value_mac) {
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passStringToWasm0(index_mac_base64, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(value_mac, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.lthashstate_setValueMac(this.__wbg_ptr, ptr0, len0, ptr1, len1);
    }
    /**
     * @param {Uint8Array | number[]} hash
     */
    set hash(hash) {
        const ptr0 = passArray8ToWasm0(hash, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.lthashstate_set_hash(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} version
     */
    set version(version) {
        wasm.lthashstate_set_version(this.__wbg_ptr, version);
    }
    /**
     * @returns {bigint}
     */
    get version() {
        const ret = wasm.lthashstate_version(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
}
if (Symbol.dispose) LTHashState.prototype[Symbol.dispose] = LTHashState.prototype.free;

/**
 * NoiseSession implements the Noise_XX_25519_AESGCM_SHA256 protocol pattern
 * with combined binary encoding/decoding operations for reduced WASM boundary crossings.
 */
export class NoiseSession {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        NoiseSessionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_noisesession_free(ptr, 0);
    }
    /**
     * Updates the session hash with the given data (no-op after handshake).
     * @param {Uint8Array | number[]} data
     */
    authenticate(data) {
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.noisesession_authenticate(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @returns {number}
     */
    get bufferedBytes() {
        const ret = wasm.noisesession_bufferedBytes(this.__wbg_ptr);
        return ret >>> 0;
    }
    clearBuffer() {
        wasm.noisesession_clearBuffer(this.__wbg_ptr);
    }
    /**
     * @param {Uint8Array | number[]} new_data
     * @returns {Array<any>}
     */
    decodeFrame(new_data) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(new_data, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.noisesession_decodeFrame(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} ciphertext
     * @returns {Uint8Array}
     */
    decrypt(ciphertext) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.noisesession_decrypt(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} data
     * @returns {Uint8Array}
     */
    encodeFrameRaw(data) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.noisesession_encodeFrameRaw(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {EncodingNode} node
     * @returns {Uint8Array}
     */
    encodeFrame(node) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.noisesession_encodeFrame(retptr, this.__wbg_ptr, node);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} plaintext
     * @returns {Uint8Array}
     */
    encrypt(plaintext) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(plaintext, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.noisesession_encrypt(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    finishInit() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.noisesession_finishInit(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {Uint8Array}
     */
    getHash() {
        const ret = wasm.noisesession_getHash(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get isFinished() {
        const ret = wasm.noisesession_isFinished(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {Uint8Array | number[]} data
     */
    mixIntoKey(data) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.noisesession_mixIntoKey(retptr, this.__wbg_ptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            if (r1) {
                throw takeFromExternrefTable0(r0);
            }
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} public_key
     * @param {Uint8Array | number[]} noise_header
     * @param {Uint8Array | number[] | null} [routing_info]
     */
    constructor(public_key, noise_header, routing_info) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            let ptr0, len0, ptr1, len1, ptr2, len2;
            try {
                ptr0 = passArray8ToWasm0(public_key, wasm.__wbindgen_export);
                len0 = WASM_VECTOR_LEN;
                ptr1 = passArray8ToWasm0(noise_header, wasm.__wbindgen_export);
                len1 = WASM_VECTOR_LEN;
                ptr2 = isLikeNone(routing_info) ? 0 : passArray8ToWasm0(routing_info, wasm.__wbindgen_export);
                len2 = WASM_VECTOR_LEN;
            } catch (e) {
                if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
                if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
                if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
                throw e;
            }
            wasm.noisesession_new(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            this.__wbg_ptr = r0;
            NoiseSessionFinalization.register(this, this.__wbg_ptr, this);
            return this;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} noise_public_key
     * @param {Uint8Array | number[]} noise_private_key
     * @param {Uint8Array | number[]} server_ephemeral
     * @returns {Uint8Array}
     */
    processHandshakeFinish(noise_public_key, noise_private_key, server_ephemeral) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            let ptr0, len0, ptr1, len1, ptr2, len2;
            try {
                ptr0 = passArray8ToWasm0(noise_public_key, wasm.__wbindgen_export);
                len0 = WASM_VECTOR_LEN;
                ptr1 = passArray8ToWasm0(noise_private_key, wasm.__wbindgen_export);
                len1 = WASM_VECTOR_LEN;
                ptr2 = passArray8ToWasm0(server_ephemeral, wasm.__wbindgen_export);
                len2 = WASM_VECTOR_LEN;
            } catch (e) {
                if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
                if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
                if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
                throw e;
            }
            wasm.noisesession_processHandshakeFinish(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {Uint8Array | number[]} server_ephemeral
     * @param {Uint8Array | number[]} server_static_encrypted
     * @param {Uint8Array | number[]} server_payload_encrypted
     * @param {Uint8Array | number[]} private_key
     * @returns {Uint8Array}
     */
    processHandshakeInit(server_ephemeral, server_static_encrypted, server_payload_encrypted, private_key) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            let ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3;
            try {
                ptr0 = passArray8ToWasm0(server_ephemeral, wasm.__wbindgen_export);
                len0 = WASM_VECTOR_LEN;
                ptr1 = passArray8ToWasm0(server_static_encrypted, wasm.__wbindgen_export);
                len1 = WASM_VECTOR_LEN;
                ptr2 = passArray8ToWasm0(server_payload_encrypted, wasm.__wbindgen_export);
                len2 = WASM_VECTOR_LEN;
                ptr3 = passArray8ToWasm0(private_key, wasm.__wbindgen_export);
                len3 = WASM_VECTOR_LEN;
            } catch (e) {
                if (ptr3) { wasm.__wbindgen_export3(ptr3, len3 * 1, 1); }
                if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
                if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
                if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
                throw e;
            }
            wasm.noisesession_processHandshakeInit(retptr, this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
if (Symbol.dispose) NoiseSession.prototype[Symbol.dispose] = NoiseSession.prototype.free;

export class ProtocolAddress {
    static __wrap(ptr) {
        const obj = Object.create(ProtocolAddress.prototype);
        obj.__wbg_ptr = ptr;
        ProtocolAddressFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ProtocolAddressFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_protocoladdress_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get deviceId() {
        const ret = wasm.protocoladdress_deviceId(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {string} encoded
     * @returns {ProtocolAddress}
     */
    static from(encoded) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.protocoladdress_from(retptr, encoded);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return ProtocolAddress.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {string}
     */
    get id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.protocoladdress_id(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {ProtocolAddress} other
     * @returns {boolean}
     */
    is(other) {
        _assertClass(other, ProtocolAddress);
        const ret = wasm.protocoladdress_is(this.__wbg_ptr, other.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {string} id
     * @param {number} device_id
     */
    constructor(id, device_id) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.protocoladdress_new(retptr, id, device_id);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            this.__wbg_ptr = r0;
            ProtocolAddressFinalization.register(this, this.__wbg_ptr, this);
            return this;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.protocoladdress_toString(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) ProtocolAddress.prototype[Symbol.dispose] = ProtocolAddress.prototype.free;

export class SenderKeyDistributionMessage {
    static __wrap(ptr) {
        const obj = Object.create(SenderKeyDistributionMessage.prototype);
        obj.__wbg_ptr = ptr;
        SenderKeyDistributionMessageFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SenderKeyDistributionMessageFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_senderkeydistributionmessage_free(ptr, 0);
    }
    /**
     * @param {Uint8Array | number[]} serialized
     * @returns {SenderKeyDistributionMessage}
     */
    static deserialize(serialized) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(serialized, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.senderkeydistributionmessage_deserialize(retptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return SenderKeyDistributionMessage.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.senderkeydistributionmessage_serialize(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) SenderKeyDistributionMessage.prototype[Symbol.dispose] = SenderKeyDistributionMessage.prototype.free;

export class SenderKeyName {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SenderKeyNameFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_senderkeyname_free(ptr, 0);
    }
    /**
     * @param {string} group_id
     * @param {ProtocolAddress} sender
     */
    constructor(group_id, sender) {
        _assertClass(sender, ProtocolAddress);
        const ptr0 = passStringToWasm0(group_id, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.senderkeyname_new(ptr0, len0, sender.__wbg_ptr);
        this.__wbg_ptr = ret;
        SenderKeyNameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.senderkeyname_toString(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_export3(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) SenderKeyName.prototype[Symbol.dispose] = SenderKeyName.prototype.free;

export class SenderKeyRecord {
    static __wrap(ptr) {
        const obj = Object.create(SenderKeyRecord.prototype);
        obj.__wbg_ptr = ptr;
        SenderKeyRecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SenderKeyRecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_senderkeyrecord_free(ptr, 0);
    }
    /**
     * @param {Uint8Array | number[]} serialized
     * @returns {SenderKeyRecord}
     */
    static deserialize(serialized) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            const ptr0 = passArray8ToWasm0(serialized, wasm.__wbindgen_export);
            const len0 = WASM_VECTOR_LEN;
            wasm.senderkeyrecord_deserialize(retptr, ptr0, len0);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return SenderKeyRecord.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {boolean}
     */
    isEmpty() {
        const ret = wasm.senderkeyrecord_isEmpty(this.__wbg_ptr);
        return ret !== 0;
    }
    constructor() {
        const ret = wasm.senderkeyrecord_new();
        this.__wbg_ptr = ret;
        SenderKeyRecordFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.senderkeyrecord_serialize(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return takeFromExternrefTable0(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
if (Symbol.dispose) SenderKeyRecord.prototype[Symbol.dispose] = SenderKeyRecord.prototype.free;

export class SessionRecord {
    static __wrap(ptr) {
        const obj = Object.create(SessionRecord.prototype);
        obj.__wbg_ptr = ptr;
        SessionRecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SessionRecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_sessionrecord_free(ptr, 0);
    }
    /**
     * @param {any} val
     * @returns {SessionRecord}
     */
    static deserialize(val) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
            wasm.sessionrecord_deserialize(retptr, val);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
            if (r2) {
                throw takeFromExternrefTable0(r1);
            }
            return SessionRecord.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @returns {boolean}
     */
    haveOpenSession() {
        const ret = wasm.sessionrecord_haveOpenSession(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.sessionrecord_serialize(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) SessionRecord.prototype[Symbol.dispose] = SessionRecord.prototype.free;

/**
 * @param {KeyPair} key_pair
 * @returns {Uint8Array}
 */
export function _serializeIdentityKeyPair(key_pair) {
    const ret = wasm._serializeIdentityKeyPair(key_pair);
    return ret;
}

/**
 * @param {Uint8Array | number[]} public_key_bytes
 * @param {Uint8Array | number[]} private_key_bytes
 * @returns {Uint8Array}
 */
export function calculateAgreement(public_key_bytes, private_key_bytes) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passArray8ToWasm0(public_key_bytes, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(private_key_bytes, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.calculateAgreement(retptr, ptr0, len0, ptr1, len1);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {Uint8Array | number[]} private_key_bytes
 * @param {Uint8Array | number[]} message
 * @returns {Uint8Array}
 */
export function calculateSignature(private_key_bytes, message) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passArray8ToWasm0(private_key_bytes, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(message, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.calculateSignature(retptr, ptr0, len0, ptr1, len1);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {Uint8Array | number[]} data
 * @returns {InternalBinaryNode}
 */
export function decodeNode(data) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.decodeNode(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return InternalBinaryNode.__wrap(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {SignalSnapshot} snapshot
 * @param {ProtocolAddress} address
 * @param {Uint8Array | number[]} ciphertext
 * @returns {Promise<DecryptOutput>}
 */
export function decryptPreKeyWithSnapshot(snapshot, address, ciphertext) {
    _assertClass(address, ProtocolAddress);
    const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.decryptPreKeyWithSnapshot(snapshot, address.__wbg_ptr, ptr0, len0);
    return ret;
}

/**
 * @param {SignalSnapshot} snapshot
 * @param {ProtocolAddress} address
 * @param {Uint8Array | number[]} ciphertext
 * @returns {Promise<DecryptOutput>}
 */
export function decryptWhisperWithSnapshot(snapshot, address, ciphertext) {
    _assertClass(address, ProtocolAddress);
    const ptr0 = passArray8ToWasm0(ciphertext, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.decryptWhisperWithSnapshot(snapshot, address.__wbg_ptr, ptr0, len0);
    return ret;
}

/**
 * @param {EncodingNode} node_val
 * @returns {Uint8Array}
 */
export function encodeNode(node_val) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        wasm.encodeNode(retptr, node_val);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {SignalSnapshot} snapshot
 * @param {ProtocolAddress} address
 * @param {Uint8Array | number[]} plaintext
 * @returns {Promise<EncryptOutput>}
 */
export function encryptWithSnapshot(snapshot, address, plaintext) {
    _assertClass(address, ProtocolAddress);
    const ptr0 = passArray8ToWasm0(plaintext, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.encryptWithSnapshot(snapshot, address.__wbg_ptr, ptr0, len0);
    return ret;
}

/**
 * @param {Uint8Array | number[]} key_data
 * @returns {ExpandedAppStateKeys}
 */
export function expandAppStateKeys(key_data) {
    const ptr0 = passArray8ToWasm0(key_data, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.expandAppStateKeys(ptr0, len0);
    return ExpandedAppStateKeys.__wrap(ret);
}

/**
 * @param {number} operation
 * @param {Uint8Array | number[]} data
 * @param {Uint8Array | number[]} key_id
 * @param {Uint8Array | number[]} key
 * @returns {Uint8Array}
 */
export function generateContentMac(operation, data, key_id, key) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const val4 = +operation;
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passArray8ToWasm0(data, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(key_id, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passArray8ToWasm0(key, wasm.__wbindgen_export);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.generateContentMac(retptr, val4, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @returns {KeyPair}
 */
export function generateIdentityKeyPair() {
    const ret = wasm.generateIdentityKeyPair();
    return ret;
}

/**
 * @param {Uint8Array | number[]} index_bytes
 * @param {Uint8Array | number[]} key
 * @returns {Uint8Array}
 */
export function generateIndexMac(index_bytes, key) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passArray8ToWasm0(index_bytes, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(key, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.generateIndexMac(retptr, ptr0, len0, ptr1, len1);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @returns {KeyPair}
 */
export function generateKeyPair() {
    const ret = wasm.generateKeyPair();
    return ret;
}

/**
 * @param {Uint8Array | number[]} snapshot_mac
 * @param {Uint8Array[]} value_macs
 * @param {bigint} version
 * @param {string} name
 * @param {Uint8Array | number[]} key
 * @returns {Uint8Array}
 */
export function generatePatchMac(snapshot_mac, value_macs, version, name, key) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const val5 = BigInt.asIntN(64, version);
        let ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3;
        try {
            ptr0 = passArray8ToWasm0(snapshot_mac, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArrayJsValueToWasm0(value_macs, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passStringToWasm0(name, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            len2 = WASM_VECTOR_LEN;
            ptr3 = passArray8ToWasm0(key, wasm.__wbindgen_export);
            len3 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr3) { wasm.__wbindgen_export3(ptr3, len3 * 1, 1); }
            if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_export8(ptr1, len1); wasm.__wbindgen_export3(ptr1, len1 * 4, 4); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.generatePatchMac(retptr, ptr0, len0, ptr1, len1, val5, ptr2, len2, ptr3, len3);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {number} key_id
 * @returns {PreKey}
 */
export function generatePreKey(key_id) {
    const ret = wasm.generatePreKey(key_id);
    return ret;
}

/**
 * @returns {number}
 */
export function generateRegistrationId() {
    const ret = wasm.generateRegistrationId();
    return ret >>> 0;
}

/**
 * @param {KeyPair} identity_key_pair
 * @param {number} signed_key_id
 * @returns {SignedPreKey}
 */
export function generateSignedPreKey(identity_key_pair, signed_key_id) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        wasm.generateSignedPreKey(retptr, identity_key_pair, signed_key_id);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {Uint8Array | number[]} lt_hash
 * @param {bigint} version
 * @param {string} name
 * @param {Uint8Array | number[]} key
 * @returns {Uint8Array}
 */
export function generateSnapshotMac(lt_hash, version, name, key) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const val4 = BigInt.asIntN(64, version);
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passArray8ToWasm0(lt_hash, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(name, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passArray8ToWasm0(key, wasm.__wbindgen_export);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.generateSnapshotMac(retptr, ptr0, len0, val4, ptr1, len1, ptr2, len2);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * Returns which optional features are enabled in this build.
 * Use this to conditionally call feature-gated functions.
 * @returns {EnabledFeatures}
 */
export function getEnabledFeatures() {
    const ret = wasm.getEnabledFeatures();
    return ret;
}

/**
 * @param {Uint8Array | number[]} private_key_bytes
 * @returns {Uint8Array}
 */
export function getPublicFromPrivateKey(private_key_bytes) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const ptr0 = passArray8ToWasm0(private_key_bytes, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.getPublicFromPrivateKey(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * Returns the WhatsApp connection header (WA_CONN_HEADER).
 * This is the 4-byte header sent at the start of a WebSocket connection.
 * @returns {Uint8Array}
 */
export function getWAConnHeader() {
    const ret = wasm.getWAConnHeader();
    return ret;
}

/**
 * @returns {boolean}
 */
export function hasLogger() {
    const ret = wasm.hasLogger();
    return ret !== 0;
}

/**
 * @param {Uint8Array | number[]} buffer
 * @param {number} expanded_length
 * @param {HkdfInfo} info
 * @returns {Uint8Array}
 */
export function hkdf(buffer, expanded_length, info) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const val2 = +expanded_length;
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.hkdf(retptr, ptr0, len0, val2, info);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * Imports at most two normal retention windows per chain, within the core's
 * default whole-record budget. Returned bytes preserve extended retention;
 * the legacy projection omits that local policy.
 * @param {LegacySessionRecordV1} record
 * @param {LegacySessionLocalContext} context
 * @returns {Uint8Array}
 */
export function importLegacySessionRecordV1(record, context) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        wasm.importLegacySessionRecordV1(retptr, record, context);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {string} level
 * @param {string} message
 */
export function logMessage(level, message) {
    let ptr0, len0, ptr1, len1;
    try {
        ptr0 = passStringToWasm0(level, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        len0 = WASM_VECTOR_LEN;
        ptr1 = passStringToWasm0(message, wasm.__wbindgen_export, wasm.__wbindgen_export2);
        len1 = WASM_VECTOR_LEN;
    } catch (e) {
        if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
        if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
        throw e;
    }
    wasm.logMessage(ptr0, len0, ptr1, len1);
}

/**
 * @param {Uint8Array | number[]} buffer
 * @returns {Uint8Array}
 */
export function md5(buffer) {
    const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_export);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.md5(ptr0, len0);
    return ret;
}

/**
 * Builds an outgoing session from a peer bundle. Same contract as the rest of
 * this module: nothing is written, everything comes back in `changes`.
 * @param {SignalSnapshot} snapshot
 * @param {ProtocolAddress} address
 * @param {SnapshotBundle} bundle
 * @returns {Promise<BundleOutput>}
 */
export function processBundleWithSnapshot(snapshot, address, bundle) {
    _assertClass(address, ProtocolAddress);
    const ret = wasm.processBundleWithSnapshot(snapshot, address.__wbg_ptr, bundle);
    return ret;
}

/**
 * The JS backend stored a sender-key record as UTF-8 JSON. Callers that keep
 * that shape on disk convert here; the storage adapter itself stays neutral,
 * so a consumer that prefers the native bytes is unaffected.
 * @param {Uint8Array | number[]} bytes
 * @returns {Uint8Array}
 */
export function projectLegacySenderKeyRecordV1(bytes) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.projectLegacySenderKeyRecordV1(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {Uint8Array | number[]} bytes
 * @returns {LegacySessionProjectionV1}
 */
export function projectLegacySessionRecordV1(bytes) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.projectLegacySessionRecordV1(retptr, ptr0, len0);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return takeFromExternrefTable0(r0);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {ILogger} logger
 */
export function setLogger(logger) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        wasm.setLogger(retptr, logger);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeFromExternrefTable0(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
 * @param {ILogger} logger
 */
export function updateLogger(logger) {
    wasm.updateLogger(logger);
}

/**
 * @param {Uint8Array | number[]} public_key_bytes
 * @param {Uint8Array | number[]} message
 * @param {Uint8Array | number[]} signature
 * @returns {boolean}
 */
export function verifySignature(public_key_bytes, message, signature) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passArray8ToWasm0(public_key_bytes, wasm.__wbindgen_export);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passArray8ToWasm0(message, wasm.__wbindgen_export);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passArray8ToWasm0(signature, wasm.__wbindgen_export);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_export3(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_export3(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_export3(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.verifySignature(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        var r2 = getDataViewMemory0().getInt32(retptr + 4 * 2, true);
        if (r2) {
            throw takeFromExternrefTable0(r1);
        }
        return r0 !== 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_208446807d0d1e30: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_ff192a72a0dcdf6d: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg_String_8564e559799eccda: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_bigint_get_as_i64_11da4b52cd0aedef: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64((arg0 >>> 0) + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_4f1baf9a00be3c74: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_3f58a9d3b3a7eed2: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_5fa10641e039d3ef: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_741ff2bb612836f5: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_null_c22311b1cc228e3a: function(arg0) {
            const ret = arg0 === null;
            return ret;
        },
        __wbg___wbindgen_is_object_8b968c3ab8e96595: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_undefined_be5b34249ff1fc15: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_38d7bfbe4cc84039: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_b2f214e2e4b30e36: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_934b640d0889af78: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64((arg0 >>> 0) + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_09736879a3f67559: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_attrs_94aa9db2cdc85a52: function(arg0) {
            const ret = arg0.attrs;
            return ret;
        },
        __wbg_call_40b008ba32f73991: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_a410eb4b59ed5965: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_content_5af0bff942b48a4a: function(arg0) {
            const ret = arg0.content;
            return ret;
        },
        __wbg_debug_10ca7029b12f8d85: function(arg0, arg1, arg2, arg3) {
            arg0.debug(arg1, arg2 === 0 ? undefined : getStringFromWasm0(arg2, arg3));
        },
        __wbg_done_57e08d0be6e30c02: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_entries_7bb1459bd9b5c2b9: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_9cce413345f88385: function(arg0, arg1, arg2, arg3) {
            arg0.error(arg1, arg2 === 0 ? undefined : getStringFromWasm0(arg2, arg3));
        },
        __wbg_from_eac91875c8a5ffa4: function(arg0) {
            const ret = Array.from(arg0);
            return ret;
        },
        __wbg_getRandomValues_8b6f1f663e6f188d: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_get_2080c49015e35254: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_635eea311fa1a291: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_d7176cfb76d71114: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_unchecked_e6325ad374eff861: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_with_ref_key_fc601247060b7204: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_has_2c4d5cf25ec8c1cf: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.has(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_info_b728e87a346ff6a2: function(arg0, arg1, arg2, arg3) {
            arg0.info(arg1, arg2 === 0 ? undefined : getStringFromWasm0(arg2, arg3));
        },
        __wbg_instanceof_ArrayBuffer_12cdaa4161423e6b: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Promise_59148c6049d0e3a0: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Promise;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_d7aeb0dcb3108fea: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_internalbinarynode_new: function(arg0) {
            const ret = InternalBinaryNode.__wrap(arg0);
            return ret;
        },
        __wbg_isArray_bcf1376d0d732d08: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isSafeInteger_1a35ba4d31e71d38: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_iterator_e4c5e8f68ada7b58: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_length_186163212ffe79c3: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_b03a0fabb109b1e9: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_level_b0196fd265df5ca4: function(arg0, arg1) {
            const ret = arg1.level;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_loadSenderKey_3a076cd6c8d12121: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.loadSenderKey(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_new_13de428334042d26: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_37eb45aaf5eeb820: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_4416a2fe2fac9c65: function(arg0, arg1) {
            const ret = new TypeError(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_787b9fb330d55d78: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_cd4348290afae586: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_from_slice_b8daf545a41c6aa0: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_typed_e09da9dae6ee5935: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return __wasm_bindgen_func_elem_1378(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = 0;
            }
        },
        __wbg_new_with_length_01b143a7e5dd5a3e: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_new_with_length_a3dc62dea6e2e158: function(arg0) {
            const ret = new Array(arg0 >>> 0);
            return ret;
        },
        __wbg_next_178c1651c11432b3: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_next_af5ac6a08bb0a717: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_parse_c3f72b5a24f83c01: function() { return handleError(function (arg0, arg1) {
            const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_prototypesetcall_13162965d1fe7aa3: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_c9f4893fc209f768: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queueMicrotask_1e8503a8a690f0a3: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_4a1a4d8dd332373b: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_resolve_dbf78ab4942478b0: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_senderkeydistributionmessage_new: function(arg0) {
            const ret = SenderKeyDistributionMessage.__wrap(arg0);
            return ret;
        },
        __wbg_set_2793479888329cb6: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_d2d33b52458e984a: function(arg0, arg1, arg2) {
            arg0[arg1 >>> 0] = arg2;
        },
        __wbg_set_e4b9a833d288759a: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_feb3714f475485ba: function(arg0, arg1, arg2) {
            arg0.set(getArrayU8FromWasm0(arg1, arg2));
        },
        __wbg_static_accessor_GLOBAL_THIS_003ee833af9699fc: function() {
            const ret = typeof globalThis === 'undefined' ? undefined : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_e4293fb22cbe77da: function() {
            const ret = typeof global === 'undefined' ? undefined : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_53bb20457401453d: function() {
            const ret = typeof self === 'undefined' ? undefined : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_b5e0810bfecb7feb: function() {
            const ret = typeof window === 'undefined' ? undefined : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_storeSenderKey_55dc3b5513dfea2a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.storeSenderKey(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        }, arguments); },
        __wbg_tag_2d2cbb1c1ef5be4a: function(arg0, arg1) {
            const ret = arg1.tag;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg_then_656f253a5dd7d8ea: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_then_e3f7f2d365708be8: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_trace_58264fbce2ceb5e6: function(arg0, arg1, arg2, arg3) {
            arg0.trace(arg1, arg2 === 0 ? undefined : getStringFromWasm0(arg2, arg3));
        },
        __wbg_value_e0f328965e184931: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_warn_db531770752932a9: function(arg0, arg1, arg2, arg3) {
            arg0.warn(arg1, arg2 === 0 ? undefined : getStringFromWasm0(arg2, arg3));
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 301, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_1361);
            return ret;
        },
        __wbindgen_generic_0000000000000002: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_generic_0000000000000003: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_generic_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_generic_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_generic_0000000000000006: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            table.set(0, undefined);
            table.set(1024, undefined);
            table.set(1025, null);
            table.set(1026, true);
            table.set(1027, false);
        },
    };
    return {
        __proto__: null,
        "./whatsapp_rust_bridge_bg.js": import0,
    };
}

function __wasm_bindgen_func_elem_1378(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_1378(arg0, arg1, arg2, arg3);
}

function __wasm_bindgen_func_elem_1361(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16) >>> 0;
        wasm.__wasm_bindgen_func_elem_1361(retptr, arg0, arg1, arg2);
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeFromExternrefTable0(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

const ExpandedAppStateKeysFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_expandedappstatekeys_free(ptr, 1));
const GroupCipherFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_groupcipher_free(ptr, 1));
const GroupSessionBuilderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_groupsessionbuilder_free(ptr, 1));
const InternalBinaryNodeFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_internalbinarynode_free(ptr, 1));
const LTHashAntiTamperingFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_lthashantitampering_free(ptr, 1));
const LTHashStateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_lthashstate_free(ptr, 1));
const NoiseSessionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_noisesession_free(ptr, 1));
const ProtocolAddressFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_protocoladdress_free(ptr, 1));
const SenderKeyDistributionMessageFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_senderkeydistributionmessage_free(ptr, 1));
const SenderKeyNameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_senderkeyname_free(ptr, 1));
const SenderKeyRecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_senderkeyrecord_free(ptr, 1));
const SessionRecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_sessionrecord_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__wbindgen_export5();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_export6(state.a, state.b));

function debugString(val) {
    switch (typeof val) {
        // primitive types
        case 'number':
        case 'boolean':
        case 'undefined':
        return `${val}`;
        case 'string':
        return JSON.stringify(val);
        case 'bigint':
        return `${val}n`;
        case 'symbol':
        return val.description !== undefined
            ? `Symbol(${val.description})`
            : 'Symbol';
        case 'function':
        return typeof val.name === 'string' && val.name !== ''
            ? `Function(${val.name})`
            : 'Function';
        case 'object': {
            if (val === null) {
                return 'null';
            }
            // objects
            if (Array.isArray(val)) {
                return '[' + Array.from(val, debugString).join(', ') + ']';
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }

            const toStringOutput = toString.call(val);
            // Test for built-in
            const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

            // Failed to match the standard '[object ClassName]'
            if (className === undefined) {
                return toStringOutput;
            }
            if (className === 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }
        // Per MDN: 'This list of values is exhaustive.'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_export4(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_export6(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__wbindgen_export7(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(bytes) {
    numBytesDecoded += bytes.length;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
        cachedTextDecoder.decode();
        numBytesDecoded = bytes.length;
    }
    return cachedTextDecoder.decode(bytes);
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

let __wbg_init_promise;
async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;
    if (__wbg_init_promise === undefined) {
        __wbg_init_promise = __wbg_init_once(module_or_path);
        __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
    }
    return __wbg_init_promise;
}

async function __wbg_init_once(module_or_path) {

    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('whatsapp_rust_bridge_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
