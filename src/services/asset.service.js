import { BaseService } from "./base.service";


class AssetService extends BaseService {
    async getAllAssets() {
        try {
            const res = await this.httpClientPublic.get('/assets')

            return res.data
        } catch (error) {
            return error
        }
    }

}

export const assetService = new AssetService()