from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
from slack_invite_app.forms import SlackInviteForm


class HomeView(TemplateView):
    template_name = 'landing_page.html'



    def get_context_data(self, **kwargs):
        if 'view' not in kwargs:
            kwargs['view'] = self
        kwargs['form'] = SlackInviteForm()
        return kwargs