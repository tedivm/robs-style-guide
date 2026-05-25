.PHONY: serve stop

serve:
	docker run --rm -d -p 9500:80 --name style-guide-server -v "$(CURDIR)/public:/usr/share/nginx/html:ro" nginx:alpine

stop:
	docker stop style-guide-server 2>/dev/null || true
