import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "zukpkrod",
    dataset: 'production',
    apiVersion: '2023-01-07',
    useCdn: true,
    token:
"sk8oUkTpv2a3baesvBBByNGm9nEn3rZcW5aL2Dx5BeYCF3sfnjwiyUD34j2yJOdcVisJcWH8x4VC0BXp2kmBlxEydIHrMlK3UhQ2Dqi89UJSsSTd7tckAtwjuJzo1a8n7DkbNPnYzoPnObTNWigkwdVMDTZ0NKYFtwG1UMVpf90CZiADzNAn"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)