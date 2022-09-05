import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OpenApiConfiguration } from '../configuration/open-api.configuration';

export class OpenApiHelper {
  static buildSwaggerJson(app: INestApplication) {
    let options = new DocumentBuilder().setTitle(
      OpenApiConfiguration.getApiTitle(),
    );
    if (OpenApiConfiguration.getApiDescription()) {
      options = options.setDescription(
        OpenApiConfiguration.getApiDescription(),
      );
    }
    if (OpenApiConfiguration.getPackageVersion()) {
      options = options.setVersion(OpenApiConfiguration.getPackageVersion());
    }
    options.setLicense(
      'OpenAPI docs generated by swagger, owner:Hitesh Suryawanshi',
      null,
    );

    options.addTag(
      'Tag',
      'Information about the current user : Hitesh Suryawanshi',
    );

    options.addServer(
      OpenApiConfiguration.getEnvironmentUrl(),
      'Server for current environment',
    );
    return SwaggerModule.createDocument(app, options.build());
  }
}