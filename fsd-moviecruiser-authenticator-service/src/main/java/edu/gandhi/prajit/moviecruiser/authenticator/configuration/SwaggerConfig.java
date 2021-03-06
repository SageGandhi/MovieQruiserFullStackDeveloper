package edu.gandhi.prajit.moviecruiser.authenticator.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import edu.gandhi.prajit.moviecruiser.authenticator.FsdMoviecruiserAuthenticatorServiceApplication;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
				.apis(RequestHandlerSelectors
						.basePackage(FsdMoviecruiserAuthenticatorServiceApplication.class.getPackage().getName()))
				.paths(PathSelectors.any()).build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("FsdMoviecruiserAuthenticatorServiceApplication Spring Boot Application")
				.description("FsdMoviecruiserAuthenticatorServiceApplication Service For Fsd")
				.contact(new Contact("Prajit Gandhi",
						"https://gitlab-cts.stackroute.in/Prajit.Gandhi/MovieCruiserServerApplication.git",
						"Prajit.Gandhi@cognizant.com"))
				.version("1.0").build();
	}

}
