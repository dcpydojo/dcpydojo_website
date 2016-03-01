from django.conf.urls import include, url
from django.contrib import admin

# from slack_invite_app import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'dcdojo_site.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^slack/', include('slack_invite_app.urls')),
    url(r'^$', include('mainsite.urls')),
]
